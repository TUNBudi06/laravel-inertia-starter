<script lang="ts">
    import NavLayout from "$/Layouts/NavLayout.svelte";
    import * as Card from "$lib/components/ui/card/index.js";

    // ── Dummy Data: 4 Months ──────────────────────────────
    let monthsData = $derived([
        {
            name: "May",
            year: 2026,
            weeks: [
                { id: 1, start: new Date(2026, 4, 4), end: new Date(2026, 4, 10), week_number: 1 },
                { id: 2, start: new Date(2026, 4, 11), end: new Date(2026, 4, 17), week_number: 2 },
                { id: 3, start: new Date(2026, 4, 18), end: new Date(2026, 4, 24), week_number: 3 },
                { id: 4, start: new Date(2026, 4, 25), end: new Date(2026, 4, 31), week_number: 4 },
            ],
            designs: {
                1: { id: 101, status: true, submitted_at: "2026-05-06T09:15:00",
                    title: "Foundation Slab Revision", pic: "Andi Pratama",
                    potensi: "Incorrect rebar spacing in foundation slab",
                    penanganan: "Revise rebar layout per updated structural calc" },
                2: { id: 102, status: true, submitted_at: "2026-05-13T11:30:00",
                    title: "Column Bracing Detail", pic: "Budi Santoso",
                    potensi: "Lateral bracing insufficient for seismic loads",
                    penanganan: "Add cross-bracing at mid-height columns" },
                3: { id: 103, status: false, submitted_at: "2026-05-20T14:00:00",
                    title: "Staircase Geometry", pic: "Siti Rahma",
                    potensi: "Step rise exceeds building code max of 180mm",
                    penanganan: "" },
                4: null,
            },
        },
        {
            name: "June",
            year: 2026,
            weeks: [
                { id: 1, start: new Date(2026, 5, 1), end: new Date(2026, 5, 7), week_number: 1 },
                { id: 2, start: new Date(2026, 5, 8), end: new Date(2026, 5, 14), week_number: 2 },
                { id: 3, start: new Date(2026, 5, 15), end: new Date(2026, 5, 21), week_number: 3 },
                { id: 4, start: new Date(2026, 5, 22), end: new Date(2026, 5, 28), week_number: 4 },
                { id: 5, start: new Date(2026, 5, 29), end: new Date(2026, 6, 5), week_number: 5 },
                { id: 6, start: new Date(2026, 6, 6), end: new Date(2026, 6, 12), week_number: 6 },
                { id: 7, start: new Date(2026, 6, 13), end: new Date(2026, 6, 19), week_number: 7 },
                { id: 8, start: new Date(2026, 6, 20), end: new Date(2026, 6, 26), week_number: 8 },
                { id: 9, start: new Date(2026, 6, 27), end: new Date(2026, 7, 2), week_number: 9 },
                { id: 10, start: new Date(2026, 7, 3), end: new Date(2026, 7, 9), week_number: 10 },
                { id: 11, start: new Date(2026, 7, 10), end: new Date(2026, 7, 16), week_number: 11 },
                { id: 12, start: new Date(2026, 7, 17), end: new Date(2026, 7, 23), week_number: 12 },
            ],
            designs: {
                1: { id: 201, status: true, submitted_at: "2026-06-03T10:30:00",
                    title: "Beam Reinforcement — Tower A", pic: "Andi Pratama",
                    potensi: "Insufficient reinforcement overlap at beam-column joint",
                    penanganan: "Add stirrups, increase overlap to 50xd" },
                2: { id: 202, status: false, submitted_at: "2026-06-10T14:15:00",
                    title: "HVAC Duct Routing — Level 3", pic: "Siti Rahma",
                    potensi: "Duct conflicts with sprinkler line, clearance below 2.1m",
                    penanganan: "" },
                3: { id: 203, status: true, submitted_at: "2026-06-17T09:00:00",
                    title: "Facade Panel Joint Detail", pic: "Budi Santoso",
                    potensi: "Water ingress at horizontal panel joints during monsoon",
                    penanganan: "Apply sealant + drip edge at all joints" },
                4: { id: 204, status: true, submitted_at: "2026-06-22T15:30:00",
                    title: "Plumbing Riser Realignment", pic: "Dian Permata",
                    potensi: "Riser clashes with structural column at level 2",
                    penanganan: "Offset riser 300mm east per revised MEP layout" },
                5: { id: 205, status: false, submitted_at: "2026-06-29T11:00:00",
                    title: "Curtain Wall Anchoring", pic: "Budi Santoso",
                    potensi: "Anchor bolt embedment depth insufficient for wind load",
                    penanganan: "" },
                6: { id: 206, status: true, submitted_at: "2026-07-07T09:20:00",
                    title: "Fire Damper Access Panel", pic: "Siti Rahma",
                    potensi: "Access panel too small for damper maintenance",
                    penanganan: "Enlarge access to 600x600mm per fire code" },
                7: { id: 207, status: true, submitted_at: "2026-07-14T13:45:00",
                    title: "Parking Ramp Gradient", pic: "Andi Pratama",
                    potensi: "Ramp slope exceeds 1:8 max for passenger vehicles",
                    penanganan: "Redesign ramp to 1:10 gradient with transition zones" },
                8: { id: 208, status: false, submitted_at: "2026-07-21T10:10:00",
                    title: "Electrical Panel Clearance", pic: "Dian Permata",
                    potensi: "Working space in front of panel less than 900mm NEC req",
                    penanganan: "" },
                9: null,
                10: null,
                11: null,
                12: null,
            },
        },
        {
            name: "July",
            year: 2026,
            weeks: [
                { id: 1, start: new Date(2026, 6, 6), end: new Date(2026, 6, 12), week_number: 1 },
                { id: 2, start: new Date(2026, 6, 13), end: new Date(2026, 6, 19), week_number: 2 },
                { id: 3, start: new Date(2026, 6, 20), end: new Date(2026, 6, 26), week_number: 3 },
                { id: 4, start: new Date(2026, 6, 27), end: new Date(2026, 7, 2), week_number: 4 },
            ],
            designs: {
                1: { id: 301, status: true, submitted_at: "2026-07-07T08:45:00",
                    title: "Roof Truss Connection", pic: "Dian Permata",
                    potensi: "Bolt shear capacity below calculated load at ridge joint",
                    penanganan: "Upgrade to high-strength bolts + stiffener plates" },
                2: { id: 302, status: true, submitted_at: "2026-07-14T13:20:00",
                    title: "Elevator Shaft Dimension", pic: "Andi Pratama",
                    potensi: "Shaft width 50mm under equipment clearance requirement",
                    penanganan: "Widen shaft by 100mm in revised structural layout" },
                3: { id: 303, status: false, submitted_at: "2026-07-21T10:00:00",
                    title: "Fire Escape Route", pic: "Siti Rahma",
                    potensi: "Corridor width below minimum 1.2m egress requirement",
                    penanganan: "" },
                4: null,
            },
        },
        {
            name: "August",
            year: 2026,
            weeks: [
                { id: 1, start: new Date(2026, 7, 3), end: new Date(2026, 7, 9), week_number: 1 },
                { id: 2, start: new Date(2026, 7, 10), end: new Date(2026, 7, 16), week_number: 2 },
                { id: 3, start: new Date(2026, 7, 17), end: new Date(2026, 7, 23), week_number: 3 },
                { id: 4, start: new Date(2026, 7, 24), end: new Date(2026, 7, 30), week_number: 4 },
            ],
            designs: {
                1: null, 2: null, 3: null, 4: null,
            },
        },
    ]);

    // ── State ─────────────────────────────────────────────
    let currentMonthIdx = $state(1); // June
    let currentPage = $state(1);
    const teamName = "Design Review Board";

    // ── Derived ───────────────────────────────────────────
    const currentMonth = $derived(monthsData[currentMonthIdx]);

    const totalWeeks = $derived(currentMonth.weeks.length);
    const submittedCount = $derived.by(() =>
        Object.values(currentMonth.designs).filter((k: any) => k !== null && k?.status).length
    );
    const pendingCount = $derived.by(() =>
        Object.values(currentMonth.designs).filter((k: any) => k !== null && !k?.status).length
    );
    const notSubmittedCount = $derived(totalWeeks - submittedCount - pendingCount);

    // Pagination: max 10 per page (2 rows × 5 cols)
    const perPage = 10;
    const totalPages = $derived(Math.max(1, Math.ceil(totalWeeks / perPage)));
    const pageWeeks = $derived(
        currentMonth.weeks.slice((currentPage - 1) * perPage, currentPage * perPage)
    );

    // Reset page on month change
    $effect(() => { currentMonthIdx; currentPage = 1; });

    // ── Detail ────────────────────────────────────────────
    let isDialogOpen = $state(false);
    let selectedDesign = $state<any>(null);

    function openDesign(d: any, n: number, w: any) {
        selectedDesign = { ...d, weekNumber: n, week: w };
        isDialogOpen = true;
    }

    // ── Helpers ───────────────────────────────────────────
    const colors = [
        "from-violet-400 to-violet-600",
        "from-cyan-400 to-cyan-600",
        "from-amber-400 to-amber-600",
        "from-emerald-400 to-emerald-600",
        "from-rose-400 to-rose-600",
    ];
    const icons = ["📐", "🔧", "🏗️", "📋", "🔄"];

    const fmtRange = (s: Date, e: Date) => {
        const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        return `${s.getDate()} ${m[s.getMonth()]} - ${e.getDate()} ${m[e.getMonth()]}`;
    };

    const fmtDateID = (d: string) =>
        new Date(d).toLocaleDateString("id-ID", {
            weekday: "long", year: "numeric", month: "long", day: "numeric",
            hour: "2-digit", minute: "2-digit",
        });

    function prev() { if (currentMonthIdx > 0) currentMonthIdx--; }
    function next() { if (currentMonthIdx < monthsData.length - 1) currentMonthIdx++; }
</script>

<NavLayout>
    <div class="space-y-6 p-4 md:p-8">
        <!-- ── Welcome ──────────────────────────────────────── -->
        <div class="rounded-lg bg-linear-to-r from-decha-pink-500 to-decha-pink-600 p-6 text-white shadow-lg md:p-8">
            <h1 class="text-2xl font-bold md:text-3xl">Welcome back!</h1>
            <p class="mt-1 text-sm text-pink-100 md:text-base">Track and manage design change submissions</p>
        </div>

        <!-- ── Board Card ───────────────────────────────────── -->
        <Card.Root>
            <!-- ── Header: Title + Month Switcher + Badges ────── -->
            <div class="flex flex-col gap-3 border-b border-border/50 px-4 py-4 md:px-6">
                <!-- Row 1: Title left, buttons right -->
                <div class="flex items-center justify-between">
                    <h2 class="text-lg font-bold tracking-tight md:text-xl">{teamName}</h2>
                    <div class="flex items-center gap-2">
                        <button
                            onclick={prev}
                            disabled={currentMonthIdx === 0}
                            class="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
                            aria-label="Previous month"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <span class="min-w-[100px] text-center text-sm font-semibold md:text-base">
                            {currentMonth.name} {currentMonth.year}
                        </span>
                        <button
                            onclick={next}
                            disabled={currentMonthIdx === monthsData.length - 1}
                            class="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
                            aria-label="Next month"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Row 2: Badges -->
                <div class="flex flex-wrap items-center gap-2">
                    <span class="rounded-full bg-decha-pink-100 px-3 py-0.5 text-xs font-semibold text-decha-pink-700 dark:bg-decha-pink-900/30 dark:text-decha-pink-300">
                        Total {totalWeeks}
                    </span>
                    <span class="rounded-full bg-green-100 px-3 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        ✅ {submittedCount} Done
                    </span>
                    {#if pendingCount > 0}
                        <span class="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                            ⏳ {pendingCount} Pending
                        </span>
                    {/if}
                    {#if notSubmittedCount > 0}
                        <span class="rounded-full bg-gray-100 px-3 py-0.5 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                            📋 {notSubmittedCount} Open
                        </span>
                    {/if}
                </div>
            </div>

            <!-- ── Weekly Cards Grid: 5 cols × 2 rows max ────── -->
            <Card.Content class="p-4 md:p-6">
                <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
                    {#each pageWeeks as week, idx (week.id)}
                        {@const wNum = week.week_number}
                        {@const d = currentMonth.designs[week.id]}
                        {@const ci = (currentPage - 1) * perPage + idx}

                        <div class="group relative aspect-[99/70] cursor-pointer overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5 transition-all duration-200 hover:shadow-lg hover:ring-decha-pink-300/40">
                            {#if d}
                                <!-- Has design data -->
                                <div class="flex h-full w-full flex-col bg-linear-to-br {colors[ci % colors.length]} p-3 md:p-4">
                                    <div class="text-2xl md:text-3xl">{icons[ci % icons.length]}</div>
                                    <div class="mt-auto space-y-0.5 md:space-y-1">
                                        <div class="flex items-center justify-between gap-1">
                                            <span class="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold text-white md:px-2 md:text-xs">
                                                W{wNum}
                                            </span>
                                            {#if d.status}
                                                <span class="rounded-full bg-green-500/30 px-1.5 py-0.5 text-[10px] font-semibold text-white md:px-2 md:text-xs">✅</span>
                                            {:else}
                                                <span class="rounded-full bg-amber-500/30 px-1.5 py-0.5 text-[10px] font-semibold text-white md:px-2 md:text-xs">⏳</span>
                                            {/if}
                                        </div>
                                        <h3 class="text-[11px] font-bold leading-tight text-white md:text-sm line-clamp-2">{d.title}</h3>
                                        <p class="text-[9px] text-white/60 md:text-xs">{fmtRange(week.start, week.end)}</p>
                                    </div>
                                    <!-- Hover -->
                                    <div class="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 transition-all duration-200 group-hover:bg-black/30">
                                        <button
                                            onclick={() => openDesign(d, wNum, week)}
                                            class="flex scale-90 transform items-center gap-1.5 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-bold text-decha-pink-700 opacity-0 shadow transition-all duration-200 hover:bg-white group-hover:scale-100 group-hover:opacity-100 md:px-4 md:py-2 md:text-sm"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="size-3 md:size-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                            </svg>
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            {:else}
                                <!-- Empty -->
                                <div class="flex h-full w-full flex-col items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 p-3 md:p-4">
                                    <div class="text-center">
                                        <div class="text-3xl opacity-30 md:text-4xl">📋</div>
                                        <div class="mt-1 text-sm font-bold text-gray-400 md:text-base">W{wNum}</div>
                                        <div class="mt-1 inline-block rounded bg-gray-200/70 px-2 py-0.5 text-[10px] font-semibold text-gray-400 md:text-xs">
                                            Open
                                        </div>
                                    </div>
                                    <!-- Hover -->
                                    <div class="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 transition-all duration-200 group-hover:bg-black/20">
                                        <span class="flex scale-90 transform items-center gap-1.5 rounded-lg bg-decha-pink-600 px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 md:px-4 md:py-2 md:text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="size-3 md:size-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                            </svg>
                                            Tambah
                                        </span>
                                    </div>
                                </div>
                            {/if}
                        </div>
                    {/each}
                </div>
            </Card.Content>

            <!-- ── Pagination ──────────────────────────────────── -->
            {#if totalPages > 1}
                <div class="flex items-center justify-center gap-1 border-t border-border/50 px-4 py-3 md:gap-2 md:px-6 md:py-4">
                    <button
                        onclick={() => currentPage = Math.max(1, currentPage - 1)}
                        disabled={currentPage === 1}
                        class="flex size-7 items-center justify-center rounded-md text-xs text-muted-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30 md:size-8 md:text-sm"
                        aria-label="Previous page"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-3 md:size-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </button>

                    {#each Array(totalPages) as _, i}
                        <button
                            onclick={() => currentPage = i + 1}
                            class="flex size-7 items-center justify-center rounded-md text-xs font-medium transition-all md:size-8 md:text-sm {currentPage === i + 1 ? 'bg-decha-pink-500 text-white shadow-xs' : 'text-muted-foreground hover:bg-muted'}"
                        >
                            {i + 1}
                        </button>
                    {/each}

                    <button
                        onclick={() => currentPage = Math.min(totalPages, currentPage + 1)}
                        disabled={currentPage === totalPages}
                        class="flex size-7 items-center justify-center rounded-md text-xs text-muted-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30 md:size-8 md:text-sm"
                        aria-label="Next page"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-3 md:size-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            {/if}
        </Card.Root>
    </div>

    <!-- ── Detail Overlay ────────────────────────────────────── -->
    {#if isDialogOpen && selectedDesign}
        <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions a11y_interactive_supports_focus -->
        <div
            class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 md:p-4"
            onclick={() => (isDialogOpen = false)}
            onkeydown={(e) => e.key === "Escape" && (isDialogOpen = false)}
            role="dialog"
            tabindex="-1"
        >
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div
                class="flex max-h-[85vh] w-full max-w-xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl md:max-w-2xl"
                onclick={(e) => e.stopPropagation()}
            >
                <!-- Header -->
                <div class="shrink-0 bg-linear-to-r from-decha-pink-400 via-decha-pink-500 to-decha-pink-600 px-4 py-3 text-white md:px-6 md:py-4">
                    <div class="flex items-start justify-between gap-4">
                        <div class="min-w-0">
                            <h2 class="text-base font-bold md:text-xl">Minggu {selectedDesign.weekNumber}</h2>
                            <p class="mt-0.5 text-xs text-pink-50 md:text-sm">{fmtRange(selectedDesign.week.start, selectedDesign.week.end)}</p>
                        </div>
                        <button
                            onclick={() => (isDialogOpen = false)}
                            class="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30 md:size-8"
                            aria-label="Tutup"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 md:size-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Body -->
                <div class="space-y-3 overflow-y-auto p-4 md:space-y-4 md:p-6">
                    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                        <div class="rounded-lg border-l-4 border-decha-pink-500 bg-pink-50/50 p-3 md:p-4">
                            <div class="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400 md:text-xs">Judul</div>
                            <div class="text-sm font-bold text-gray-800 md:text-base">{selectedDesign.title}</div>
                        </div>
                        <div class="rounded-lg border-l-4 border-green-500 bg-green-50/50 p-3 md:p-4">
                            <div class="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400 md:text-xs">Status</div>
                            <div class="flex items-center gap-2">
                                {#if selectedDesign.status}
                                    <span class="text-xl md:text-2xl">✅</span>
                                    <span class="text-sm font-bold text-green-600 md:text-base">Sudah Ditangani</span>
                                {:else}
                                    <span class="text-xl md:text-2xl">⏳</span>
                                    <span class="text-sm font-bold text-amber-600 md:text-base">Menunggu</span>
                                {/if}
                            </div>
                        </div>
                        <div class="rounded-lg border-l-4 border-blue-500 bg-blue-50/50 p-3 md:p-4">
                            <div class="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400 md:text-xs">PIC</div>
                            <div class="text-sm font-bold text-blue-600 md:text-base">{selectedDesign.pic}</div>
                        </div>
                        <div class="rounded-lg border-l-4 border-purple-500 bg-purple-50/50 p-3 md:p-4">
                            <div class="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400 md:text-xs">Tanggal</div>
                            <div class="text-xs font-medium text-gray-700 md:text-sm">{fmtDateID(selectedDesign.submitted_at)}</div>
                        </div>
                    </div>

                    <div class="rounded-lg border border-red-200 bg-red-50 p-3 md:p-4">
                        <div class="mb-1 flex items-center gap-1.5">
                            <span class="text-base md:text-lg">⚠️</span>
                            <span class="text-[10px] font-bold uppercase tracking-wider text-red-700 md:text-xs">Issue / Potensi</span>
                        </div>
                        <p class="text-xs leading-relaxed text-red-800 md:text-sm">{selectedDesign.potensi}</p>
                    </div>

                    <div class="rounded-lg border border-green-200 bg-green-50 p-3 md:p-4">
                        <div class="mb-1 flex items-center gap-1.5">
                            <span class="text-base md:text-lg">🛠️</span>
                            <span class="text-[10px] font-bold uppercase tracking-wider text-green-700 md:text-xs">Penanganan</span>
                        </div>
                        {#if selectedDesign.penanganan}
                            <p class="text-xs leading-relaxed text-green-800 md:text-sm">{selectedDesign.penanganan}</p>
                        {:else}
                            <p class="text-xs italic text-green-600 md:text-sm">Belum ada penanganan</p>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    {/if}
</NavLayout>
