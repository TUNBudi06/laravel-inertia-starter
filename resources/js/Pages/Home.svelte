<script lang="ts">
    import DefaultLayout from '../Layouts/DefaultLayout.svelte';
    import { Button } from '$shadcn/components/ui/button';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$shadcn/components/ui/card';
    import { route, routeUrl } from '@tunbudi06/inertia-route-helper';
    import { Link } from '@inertiajs/svelte';
    import { about } from '$routes';

    interface Props {
        message?: string;
    }

    let { message = 'Welcome to the Home Page!' }: Props = $props();

    const features = [
        {
            title: 'Laravel 12',
            description: 'Latest Laravel framework with modern PHP features',
            icon: '🚀'
        },
        {
            title: 'Svelte 5',
            description: 'Cutting-edge Svelte with runes and enhanced reactivity',
            icon: '⚡'
        },
        {
            title: 'Inertia.js',
            description: 'Build SPAs without the complexity of APIs',
            icon: '🔗'
        },
        {
            title: 'shadcn-svelte',
            description: 'Beautiful and accessible UI components',
            icon: '🎨'
        }
    ];
</script>

<DefaultLayout>
    <div class="space-y-8">
        <!-- Hero Section -->
        <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                {message}
            </h1>
            <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                This is a demo application showcasing Laravel, Svelte, Inertia.js, and shadcn-ui components.
            </p>
            <div class="mt-10 flex items-center justify-center gap-4">
                <Link href={routeUrl(about())}>
                    <Button size="lg">
                        Learn More
                    </Button>
                </Link>
                <Button variant="outline" size="lg">
                    View Documentation
                </Button>
            </div>
        </div>

        <!-- Features Grid -->
        <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {#each features as feature}
                <Card>
                    <CardHeader>
                        <div class="text-4xl mb-2">{feature.icon}</div>
                        <CardTitle>{feature.title}</CardTitle>
                        <CardDescription>
                            {feature.description}
                        </CardDescription>
                    </CardHeader>
                </Card>
            {/each}
        </div>

        <!-- Demo Section -->
        <Card class="mt-8">
            <CardHeader>
                <CardTitle>Route Helper Demo</CardTitle>
                <CardDescription>
                    Using @tunbudi06/inertia-route-helper with Wayfinder
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div class="space-y-2 font-mono text-sm">
                    <div class="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
                        <p class="text-slate-600 dark:text-slate-400">About page URL:</p>
                        <p class="font-semibold text-slate-900 dark:text-white">{routeUrl(about())}</p>
                    </div>
                    <div class="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
                        <p class="text-slate-600 dark:text-slate-400">About route object:</p>
                        <pre class="mt-2 text-xs text-slate-900 dark:text-white">{JSON.stringify(route(about()), null, 2)}</pre>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
</DefaultLayout>

