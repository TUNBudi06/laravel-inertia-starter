<script lang="ts">
    import { cn } from "$lib/utils";
    import Menu from "@lucide/svelte/icons/menu";
    import X from "@lucide/svelte/icons/x";
    import IconsLogOut from "@lucide/svelte/icons/log-out";
    import { scrollY } from "svelte/reactivity/window";
    import { fade } from "svelte/transition";
    import { Link, router } from "@inertiajs/svelte";
    import {isCurrentRoute} from "@tunbudi06/inertia-route-helper";
    import {dashboard, loginLogout} from "$routes";
    import member from "$routes/member";

    let { children } = $props();

    let menuItems = [
        { name: "Dashboard", href: dashboard().url, description: "List design changes this month" },
        { name: "Input Design", href: "#solutions", description: "Submit a design change" },
        { name: "Input Temuan", href: "#solutions", description: "Log design findings" },
        { name: "Find Design Changes", href: "#pricing", description: "Search change history" },
        { name: "Member", href: member.index().url, description: "Manage user accounts" },
    ];

    let menuState = $state(false);

    const isScrolled = $derived.by(() => (scrollY.current ?? 0) > 20);
    const currentPath = $derived(window.location.pathname);

    function handleLogout() {
        router.visit(loginLogout().url);
    }
</script>

<header class="contents">
    <nav
        class={cn(
            "fixed inset-x-0 top-0 z-50 transition-all duration-300",
            "bg-background/80 backdrop-blur-xl","border-b border-border/40 shadow-sm shadow-black/5"
        )}
    >
        <div class=" mx-auto px-4 md:px-6">
            <div class="flex h-16 items-center justify-between">
                <!-- Logo / Brand -->
                <Link
                    href="/dashboard"
                    class="group flex items-center gap-2.5 transition-all hover:opacity-85"
                >
                    <span class="bg-linear-to-r from-decha-pink-600 to-decha-rose bg-clip-text text-xl font-bold tracking-tight text-transparent">
                        Iseki
                    </span>
                    <span class=" text-xl font-light tracking-tight text-foreground/60">
                        Decha
                    </span>
                </Link>

                <!-- Desktop Navigation with Tooltips -->
                <div class="hidden items-center gap-0.5 lg:flex">
                    {#each menuItems as item}
                        <div class="tooltip-wrapper relative">
                            <Link
                                href={item.href}
                                class={cn(
                                    "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                                    isCurrentRoute(item.href,false,true)
                                        ? "text-decha-pink-600 dark:text-decha-pink-400"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                )}
                            >
                                {item.name}
                                {#if isCurrentRoute(item.href,false,true)}
                                    <span
                                        class="absolute inset-x-2 bottom-0.5 h-0.5 rounded-full bg-decha-pink-500/60 dark:bg-decha-pink-400/60"
                                        aria-hidden="true"
                                    ></span>
                                {/if}
                            </Link>
                            {#if item.description}
                                <div
                                    class="tooltip pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-1.5
                                    whitespace-nowrap rounded-lg border border-border/50 bg-popover px-3 py-1.5
                                    text-xs font-medium text-popover-foreground shadow-md"
                                >
                                    {item.description}
                                </div>
                            {/if}
                        </div>
                    {/each}
                </div>

                <!-- Desktop Logout -->
                <div class="hidden items-center lg:flex">
                    <div class="mx-2 h-6 w-px bg-border"></div>
                    <button
                        onclick={handleLogout}
                        class="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/20"
                    >
                        <IconsLogOut class="size-4" />
                        Logout
                    </button>
                </div>

                <!-- Mobile Menu Toggle -->
                <button
                    type="button"
                    class="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:hidden"
                    onclick={() => (menuState = !menuState)}
                    aria-label="Toggle menu"
                >
                    {#if menuState}
                        <X class="size-5" />
                    {:else}
                        <Menu class="size-5" />
                    {/if}
                </button>
            </div>
        </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    {#if menuState}
        <div
            class="fixed inset-0 z-40 bg-background/95 backdrop-blur-md lg:hidden"
            transition:fade={{ duration: 200 }}
        >
            <div class="flex h-full flex-col p-6 pt-24">
                <nav class="flex flex-col gap-3">
                    {#each menuItems as item}
                        <Link
                            href={item.href}
                            class={cn(
                                "group flex flex-col rounded-2xl px-4 py-3 transition-all",
                                currentPath.includes(item.href)
                                    ? "bg-decha-pink-50/60 text-decha-pink-700 dark:bg-decha-pink-950/30 dark:text-decha-pink-300"
                                    : "text-foreground/70 hover:bg-muted/50 hover:text-foreground"
                            )}
                            onclick={() => (menuState = false)}
                        >
                            <span class="text-lg font-semibold">{item.name}</span>
                            {#if item.description}
                                <span class="text-sm text-muted-foreground">{item.description}</span>
                            {/if}
                        </Link>
                    {/each}
                </nav>

                <div class="mt-auto flex flex-col gap-3 pt-6 border-t border-border">
                    <button
                        onclick={() => { menuState = false; handleLogout(); }}
                        class="flex items-center justify-center gap-2 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100 dark:bg-red-950/20 dark:text-red-400"
                    >
                        <IconsLogOut class="size-5" />
                        Logout
                    </button>
                </div>
            </div>
        </div>
    {/if}
</header>

<main class="flex-1 pt-16 w-full h-full bg-decha-pink-100">
    {@render children?.()}
</main>

<style>
    .tooltip-wrapper {
        --tooltip-delay: 0.15s;
    }
    .tooltip-wrapper .tooltip {
        visibility: hidden;
        transform: translateX(-50%) translateY(4px);
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0.2s;
    }
    .tooltip-wrapper:hover .tooltip {
        visibility: visible;
        opacity: 1;
        transform: translateX(-50%) translateY(0);
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0s;
        transition-delay: var(--tooltip-delay);
    }
</style>
