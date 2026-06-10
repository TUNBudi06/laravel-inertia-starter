<script lang="ts">
    import { Toaster } from "$lib/components/ui/sonner";
    import { AnimatedCircularProgressBar } from "$lib/components/custom";
    import { router } from "@inertiajs/svelte";
    import { onMount, onDestroy } from "svelte";

    let { children } = $props();

    let showSplash = $state(true);
    let progressValue = $state(15);
    let isDark = $state(false);
    let cleanupFns: (() => void)[] = [];

    function detectTheme() {
        isDark = document.documentElement.classList.contains("dark");
    }

    function hideSplash() {
        const splash = document.getElementById("app-splash");
        if (splash) splash.classList.add("hide");
        showSplash = false;
    }

    const gaugeColors = $derived({
        primary: isDark
            ? "oklch(0.656 0.241 354.308)"
            : "oklch(0.592 0.249 0.584)",
        secondary: isDark
            ? "oklch(0.263 0.024 320.12)"
            : "oklch(0.916 0.016 343.14)",
    });

    onMount(() => {
        detectTheme();

        // Watch for theme changes
        const observer = new MutationObserver(() => detectTheme());
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        // Hide the CSS spinner in Blade, show Svelte component
        const splash = document.getElementById("app-splash");
        if (splash) splash.classList.add("svelte-ready");

        // Animate progress as initial page loads
        const progressTimer = setInterval(() => {
            progressValue = Math.min(progressValue + Math.random() * 8 + 2, 90);
        }, 300);

        // Listen for first Inertia page finish
        const onFinish = () => {
            clearInterval(progressTimer);
            progressValue = 100;
            setTimeout(hideSplash, 500);
        };
        router.on("finish", onFinish);

        // Fallback: force-hide after 5s
        const fallback = setTimeout(() => {
            clearInterval(progressTimer);
            hideSplash();
        }, 5000);

        cleanupFns = [
            () => { clearInterval(progressTimer); clearTimeout(fallback); },
            () => observer.disconnect(),
            () => router.off("finish", onFinish),
        ];
    });

    onDestroy(() => {
        cleanupFns.forEach((fn) => fn());
    });
</script>

<Toaster richColors position="top-right" />

{#if showSplash}
    <div class="fixed inset-0 z-9999 flex flex-col items-center justify-center gap-6">
        <AnimatedCircularProgressBar
            value={progressValue}
            gaugePrimaryColor={gaugeColors.primary}
            gaugeSecondaryColor={gaugeColors.secondary}
        />
        <span
            class="text-sm font-semibold text-muted-foreground animate-pulse transition-colors"
        >
            Loading
        </span>
    </div>
{/if}

{@render children?.()}
