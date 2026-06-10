import type { ResolvedComponent } from '@inertiajs/svelte';
import { createInertiaApp, router } from '@inertiajs/svelte';
import { initRouteHelper } from '@tunbudi06/inertia-route-helper/init';
import { hydrate, mount } from 'svelte';
import NProgress from 'nprogress';
import BaseLayout from "$/Layouts/BaseLayout.svelte";
import '../css/app.css';
import './bootstrap';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// ── NProgress: page-to-page navigation ────────────────────
NProgress.configure({ showSpinner: false, trickleSpeed: 200 });

router.on('start', () => NProgress.start());
router.on('finish', () => NProgress.done());

// ── Inertia app ────────────────────────────────────────────
createInertiaApp({
    layout: () => BaseLayout,
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name: string) => {
        const pages = import.meta.glob<ResolvedComponent>(
            './pages/**/*.svelte',
        );
        return pages[`./pages/${name}.svelte`]();
    },
    setup({ el, App, props }) {
        initRouteHelper(props);

        if (!el) {
            return;
        }

        if (el.dataset.serverRendered === 'true') {
            hydrate(App, { target: el, props });
        } else {
            mount(App, { target: el, props });
        }
    },
    progress: false,
});
