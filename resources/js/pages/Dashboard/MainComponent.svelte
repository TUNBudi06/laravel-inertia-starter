<script lang="ts">
    import NavLayout from "$/Layouts/NavLayout.svelte";
    import * as Card from "$lib/components/ui/card/index.js";

    let { teams = [] } = $props();

    // ── Dummy Monthly Data ────────────────────────────────
    let monthsData = $derived([
        {
            name: "May", year: 2026,
            weeks: [
                { id: 1, start: new Date(2026, 4, 4), end: new Date(2026, 4, 10), week_number: 1 },
                { id: 2, start: new Date(2026, 4, 11), end: new Date(2026, 4, 17), week_number: 2 },
                { id: 3, start: new Date(2026, 4, 18), end: new Date(2026, 4, 24), week_number: 3 },
                { id: 4, start: new Date(2026, 4, 25), end: new Date(2026, 4, 31), week_number: 4 },
            ],
        },
        {
            name: "June", year: 2026,
            weeks: [
                { id: 1, start: new Date(2026, 5, 1), end: new Date(2026, 5, 7), week_number: 1 },
                { id: 2, start: new Date(2026, 5, 8), end: new Date(2026, 5, 14), week_number: 2 },
                { id: 3, start: new Date(2026, 5, 15), end: new Date(2026, 5, 21), week_number: 3 },
                { id: 4, start: new Date(2026, 5, 22), end: new Date(2026, 5, 28), week_number: 4 },
                { id: 5, start: new Date(2026, 5, 29), end: new Date(2026, 6, 5), week_number: 5 },
            ],
        },
        {
            name: "July", year: 2026,
            weeks: [
                { id: 1, start: new Date(2026, 6, 6), end: new Date(2026, 6, 12), week_number: 1 },
                { id: 2, start: new Date(2026, 6, 13), end: new Date(2026, 6, 19), week_number: 2 },
                { id: 3, start: new Date(2026, 6, 20), end: new Date(2026, 6, 26), week_number: 3 },
                { id: 4, start: new Date(2026, 6, 27), end: new Date(2026, 7, 2), week_number: 4 },
            ],
        },
        {
            name: "August", year: 2026,
            weeks: [
                { id: 1, start: new Date(2026, 7, 3), end: new Date(2026, 7, 9), week_number: 1 },
                { id: 2, start: new Date(2026, 7, 10), end: new Date(2026, 7, 16), week_number: 2 },
                { id: 3, start: new Date(2026, 7, 17), end: new Date(2026, 7, 23), week_number: 3 },
                { id: 4, start: new Date(2026, 7, 24), end: new Date(2026, 7, 30), week_number: 4 },
            ],
        },
    ]);

    // ── Dummy Designs per Team ────────────────────────────
    // Assign different design data to each team for variety
    let teamDesigns = $derived({
        "DST": {
            1: { id: 1, status: true, submitted_at: "2026-06-03T10:30:00",
                title: "DST-001: Beam Connection", pic: "Andi",
                potensi: "Insufficient bolt count at splice",
                penanganan: "Add 2 more bolts per ASTM spec" },
            2: { id: 2, status: false, submitted_at: "2026-06-10T14:15:00",
                title: "DST-002: Base Plate", pic: "Budi",
                potensi: "Base plate thickness under-designed",
                penanganan: "" },
            3: { id: 3, status: true, submitted_at: "2026-06-17T09:00:00",
                title: "DST-003: Gusset Detail", pic: "Citra",
                potensi: "Gusset plate buckling risk",
                penanganan: "Add stiffener at mid-span" },
            4: null,
            5: null,
        },
        "LINE A": {
            1: { id: 4, status: true, submitted_at: "2026-06-04T08:00:00",
                title: "LA-001: Conveyor Support", pic: "Dedi",
                potensi: "Support leg too slender for lateral load",
                penanganan: "Upgrade to H-beam 200x200" },
            2: { id: 5, status: true, submitted_at: "2026-06-11T11:30:00",
                title: "LA-002: Rail Alignment", pic: "Eka",
                potensi: "Rail deviation exceeds 2mm tolerance",
                penanganan: "Realign and re-weld per standard" },
            3: { id: 6, status: false, submitted_at: "2026-06-18T13:00:00",
                title: "LA-003: Guard Rail", pic: "Fajar",
                potensi: "Guard rail height only 900mm vs req 1100mm",
                penanganan: "" },
            4: null,
            5: null,
        },
        "LINE B": {
            1: { id: 7, status: false, submitted_at: "2026-06-05T09:15:00",
                title: "LB-001: Hydraulic Line", pic: "Gilang",
                potensi: "Hydraulic hose routing crosses walkway",
                penanganan: "" },
            2: { id: 8, status: true, submitted_at: "2026-06-12T10:45:00",
                title: "LB-002: Sensor Mount", pic: "Hendra",
                potensi: "Bracket vibration amplitude exceeds limit",
                penanganan: "Add rubber damping mount" },
            3: null,
            4: null,
            5: null,
        },
    });

    // ── State ─────────────────────────────────────────────
    let currentMonthIdx = $state(1);
    let currentPage = $state(1);
    const perPage = 10;

    const weekColors = ["from-violet-400 to-violet-600", "from-cyan-400 to-cyan-600", "from-amber-400 to-amber-600", "from-emerald-400 to-emerald-600", "from-rose-400 to-rose-600"];
    const weekIcons = ["📐", "🔧", "🏗️", "📋", "🔄"];

    const currentMonth = $derived(monthsData[currentMonthIdx]);
    const weeks = $derived(currentMonth.weeks);
    const totalPages = $derived(Math.max(1, Math.ceil(weeks.length / perPage)));
    const pageWeeks = $derived(weeks.slice((currentPage - 1) * perPage, currentPage * perPage));

    // Pad to exactly 10 cards per page (5 cols × 2 rows)
    const displaySlots = $derived.by(() => {
        const slots = [...pageWeeks];
        while (slots.length < 10) {
            slots.push(null);
        }
        return slots;
    });

    // Stats per team
    function getStats(teamName: string) {
        const designs = teamDesigns[teamName] || {};
        const vals = Object.values(designs) as any[];
        const total = Object.keys(designs).length;
        const submitted = vals.filter((d: any) => d !== null && d?.status).length;
        const pending = vals.filter((d: any) => d !== null && !d?.status).length;
        const open = total - submitted - pending;
        return { total, submitted, pending, open };
    }

    $effect(() => { currentMonthIdx; currentPage = 1; });

    // ── Detail ────────────────────────────────────────────
    let isDialogOpen = $state(false);
    let selectedDesign = $state<any>(null);

    function openDesign(d: any, n: number, w: any) {
        selectedDesign = { ...d, weekNumber: n, week: w };
        isDialogOpen = true;
    }

    const fmtRange = (s: Date, e: Date) => {
        const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        return `${s.getDate()} ${m[s.getMonth()]} - ${e.getDate()} ${m[e.getMonth()]}`;
    };
</script>

<NavLayout>
    <div class="space-y-6 p-4 md:p-8">
        <!-- Welcome -->
        <div class="rounded-lg bg-linear-to-r from-decha-pink-500 to-decha-pink-600 p-6 text-white shadow-lg md:p-8">
            <h1 class="text-2xl font-bold md:text-3xl">Dashboard</h1>
            <p class="mt-1 text-sm text-pink-100 md:text-base">{teams.length} teams — {currentMonth.name} {currentMonth.year}</p>
        </div>

        <!-- Month Switcher -->
        <div class="flex items-center justify-between rounded-lg border border-border/50 bg-card px-4 py-3 shadow-xs">
            <span class="text-sm font-semibold text-muted-foreground">Periode:</span>
            <div class="flex items-center gap-2">
                <button onclick={() => { if (currentMonthIdx > 0) currentMonthIdx--; }}
                    disabled={currentMonthIdx === 0}
                    class="flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted disabled:opacity-30">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-3.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                </button>
                <span class="min-w-[120px] text-center text-sm font-bold">{currentMonth.name} {currentMonth.year}</span>
                <button onclick={() => { if (currentMonthIdx < monthsData.length - 1) currentMonthIdx++; }}
                    disabled={currentMonthIdx === monthsData.length - 1}
                    class="flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted disabled:opacity-30">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-3.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>
                </button>
            </div>
        </div>

        <!-- Team Boards -->
        <div class="space-y-6">
            {#each teams as team (team.id)}
                {@const teamName = team.team_name}
                {@const designs = teamDesigns[teamName] || {}}
                {@const stats = getStats(teamName)}

                <Card.Root>
                    <div class="flex flex-col gap-2 border-b border-border/50 px-4 py-3 md:px-6 md:py-4">
                        <div class="flex items-center justify-between">
                            <h2 class="text-base font-bold md:text-lg">{teamName}</h2>
                            <span class="text-xs text-muted-foreground">{stats.total} minggu</span>
                        </div>
                        <div class="flex flex-wrap gap-1.5">
                            <span class="rounded-full bg-decha-pink-100 px-2.5 py-0.5 text-[10px] font-semibold text-decha-pink-700">Total {stats.total}</span>
                            <span class="rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-semibold text-green-700">✅ {stats.submitted}</span>
                            {#if stats.pending > 0}
                                <span class="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-semibold text-amber-700">⏳ {stats.pending}</span>
                            {/if}
                            {#if stats.open > 0}
                                <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-semibold text-gray-600">📋 {stats.open}</span>
                            {/if}
                        </div>
                    </div>
                    <Card.Content class="p-3 md:p-5">
                        <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-3">
                            {#each displaySlots as slot, idx}
                                {@const week = slot}
                                {@const wNum = week?.week_number ?? (idx + 1)}
                                {@const d = week ? designs[week.id] : null}
                                <div class="group relative aspect-[99/70] cursor-pointer overflow-hidden rounded-lg shadow-xs ring-1 ring-black/5 transition-all duration-200 hover:shadow-md hover:ring-decha-pink-300/40">
                                    {#if d}
                                        <div class="flex h-full w-full flex-col bg-linear-to-br {weekColors[idx % weekColors.length]} p-2.5 md:p-3">
                                            <div class="text-xl md:text-2xl">{weekIcons[idx % weekIcons.length]}</div>
                                            <div class="mt-auto space-y-0.5">
                                                <div class="flex items-center justify-between gap-1">
                                                    <span class="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold text-white">W{wNum}</span>
                                                    {#if d.status}
                                                        <span class="text-[10px] text-white">✅</span>
                                                    {:else}
                                                        <span class="text-[10px] text-white">⏳</span>
                                                    {/if}
                                                </div>
                                                <h3 class="text-[10px] font-bold leading-tight text-white md:text-xs line-clamp-2">{d.title}</h3>
                                            </div>
                                            <div class="absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 transition-all duration-200 group-hover:bg-black/30">
                                                <button onclick={() => openDesign(d, wNum, week)}
                                                    class="flex scale-90 transform items-center gap-1 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-bold text-decha-pink-700 opacity-0 shadow transition-all duration-200 hover:bg-white group-hover:scale-100 group-hover:opacity-100 md:px-3 md:py-1.5 md:text-xs">
                                                    Detail
                                                </button>
                                            </div>
                                        </div>
                                    {:else if week}
                                        <div class="flex h-full w-full flex-col items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 p-2.5">
                                            <div class="text-center">
                                                <div class="text-xl opacity-30 md:text-2xl">📋</div>
                                                <div class="text-[10px] font-bold text-gray-400 md:text-xs">W{wNum}</div>
                                            </div>
                                        </div>
                                    {:else}
                                        <!-- Empty slot (pad to 10) -->
                                        <div class="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50/30 p-2.5">
                                            <span class="text-[10px] text-gray-300">—</span>
                                        </div>
                                    {/if}
                                </div>
                            {/each}
                        </div>
                    </Card.Content>

                    {#if totalPages > 1}
                        <div class="flex items-center justify-center gap-1 border-t border-border/50 px-4 py-2">
                            <button onclick={() => currentPage = Math.max(1, currentPage - 1)}
                                disabled={currentPage === 1}
                                class="flex size-6 items-center justify-center rounded text-[10px] text-muted-foreground hover:bg-muted disabled:opacity-30">
                                <svg xmlns="http://www.w3.org/2000/svg" class="size-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                            </button>
                            {#each Array(totalPages) as _, i}
                                <button onclick={() => currentPage = i + 1}
                                    class="flex size-6 items-center justify-center rounded text-[10px] font-medium {currentPage === i + 1 ? 'bg-decha-pink-500 text-white' : 'text-muted-foreground hover:bg-muted'}">
                                    {i + 1}
                                </button>
                            {/each}
                            <button onclick={() => currentPage = Math.min(totalPages, currentPage + 1)}
                                disabled={currentPage === totalPages}
                                class="flex size-6 items-center justify-center rounded text-[10px] text-muted-foreground hover:bg-muted disabled:opacity-30">
                                <svg xmlns="http://www.w3.org/2000/svg" class="size-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>
                            </button>
                        </div>
                    {/if}
                </Card.Root>
            {/each}
        </div>
    </div>

    <!-- ── Detail Overlay ────────────────────────────────── -->
    {#if isDialogOpen && selectedDesign}
        <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions a11y_interactive_supports_focus -->
        <div class="fixed inset-0 z-[9999] flex items-start justify-center bg-black/50 backdrop-blur-sm p-4 pt-16"
            onclick={() => (isDialogOpen = false)}
            onkeydown={(e) => e.key === "Escape" && (isDialogOpen = false)}
            role="dialog" tabindex="-1">
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl" onclick={(e) => e.stopPropagation()}>
                <div class="bg-linear-to-r from-decha-pink-400 via-decha-pink-500 to-decha-pink-600 px-5 py-3 text-white">
                    <div class="flex items-center justify-between">
                        <div>
                            <h2 class="text-base font-bold">Minggu {selectedDesign.weekNumber}</h2>
                            <p class="text-xs text-pink-50">{fmtRange(selectedDesign.week.start, selectedDesign.week.end)}</p>
                        </div>
                        <button onclick={() => (isDialogOpen = false)} class="flex size-7 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30" aria-label="Tutup">
                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                        </button>
                    </div>
                </div>
                <div class="space-y-3 p-5">
                    <div class="rounded-lg border-l-4 border-decha-pink-500 bg-pink-50/50 p-3">
                        <div class="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Judul</div>
                        <div class="text-sm font-bold text-gray-800">{selectedDesign.title}</div>
                    </div>
                    <div class="rounded-lg border-l-4 border-green-500 bg-green-50/50 p-3">
                        <div class="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Status</div>
                        <div class="flex items-center gap-2">
                            {#if selectedDesign.status}
                                <span class="text-xl">✅</span><span class="text-sm font-bold text-green-600">Sudah Ditangani</span>
                            {:else}
                                <span class="text-xl">⏳</span><span class="text-sm font-bold text-amber-600">Menunggu</span>
                            {/if}
                        </div>
                    </div>
                    <div class="rounded-lg border border-red-200 bg-red-50 p-3">
                        <div class="flex items-center gap-1.5 mb-1"><span class="text-base">⚠️</span><span class="text-[10px] font-bold uppercase tracking-wider text-red-700">Issue</span></div>
                        <p class="text-xs leading-relaxed text-red-800">{selectedDesign.potensi}</p>
                    </div>
                    <div class="rounded-lg border border-green-200 bg-green-50 p-3">
                        <div class="flex items-center gap-1.5 mb-1"><span class="text-base">🛠️</span><span class="text-[10px] font-bold uppercase tracking-wider text-green-700">Penanganan</span></div>
                        {#if selectedDesign.penanganan}
                            <p class="text-xs leading-relaxed text-green-800">{selectedDesign.penanganan}</p>
                        {:else}
                            <p class="text-xs italic text-green-600">Belum ada</p>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    {/if}
</NavLayout>
