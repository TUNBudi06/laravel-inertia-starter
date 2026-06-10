<script lang="ts">
    import NavLayout from "$/Layouts/NavLayout.svelte";
    import * as Card from "$lib/components/ui/card/index.js";
    import { router, useForm } from "@inertiajs/svelte";
    import { toast } from "svelte-sonner";
    import { Toaster } from "$lib/components/ui/sonner";
    import * as memberRoute from "$routes/member";

    let { members = [] } = $props();

    // ── Form State ──────────────────────────────────────────
    let isModalOpen = $state(false);
    let editingMember = $state<any>(null);
    let mode = $state<"add" | "edit">("add");

    const form = useForm({
        name: "",
        username: "",
        password: "",
        role: "member",
    });

    function openAdd() {
        mode = "add";
        editingMember = null;
        form.reset();
        form.defaults({ name: "", username: "", password: "", role: "member" });
        isModalOpen = true;
    }

    function openEdit(member: any) {
        mode = "edit";
        editingMember = member;
        form.defaults({
            name: member.name,
            username: member.username,
            password: "",
            role: member.role,
        });
        form.reset();
        isModalOpen = true;
    }

    function closeModal() {
        isModalOpen = false;
        editingMember = null;
    }

    function handleSubmit(e: Event) {
        e.preventDefault();

        if (mode === "add") {
            form.post(memberRoute.store().url, {
                onSuccess: () => {
                    toast.success("Member berhasil ditambahkan");
                    closeModal();
                },
                onError: (err) => {
                    toast.error("Gagal menyimpan: " + Object.values(err).join(", "));
                },
            });
        } else if (mode === "edit" && editingMember) {
            form.put(memberRoute.update({ member: editingMember.id }).url, {
                onSuccess: () => {
                    toast.success("Member berhasil diperbarui");
                    closeModal();
                },
                onError: (err) => {
                    toast.error("Gagal memperbarui: " + Object.values(err).join(", "));
                },
            });
        }
    }

    function handleDelete(member: any) {
        if (!confirm(`Hapus member "${member.name}"?`)) return;

        router.delete(memberRoute.destroy({ member: member.id }).url, {
            onSuccess: () => toast.success("Member berhasil dihapus"),
            onError: () => toast.error("Gagal menghapus member"),
        });
    }
</script>

<NavLayout>
    <Toaster richColors position="top-right" />

    <div class="space-y-6 p-4 md:p-8">
        <!-- Header -->
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold tracking-tight md:text-3xl">Member</h1>
                <p class="mt-1 text-sm text-muted-foreground">Manage user accounts and roles</p>
            </div>
            <button
                onclick={openAdd}
                class="flex items-center gap-2 rounded-lg bg-decha-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-decha-pink-700"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
                Tambah Member
            </button>
        </div>

        <!-- Table -->
        <Card.Root>
            <Card.Content class="p-0">
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="border-b border-border bg-muted/30">
                                <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground md:px-6">#</th>
                                <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground md:px-6">Nama</th>
                                <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground md:px-6">Username</th>
                                <th class="hidden px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground md:table-cell md:px-6">Role</th>
                                <th class="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground md:px-6">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border">
                            {#each members as member, i (member.id)}
                                <tr class="transition-colors hover:bg-muted/20">
                                    <td class="px-4 py-3 text-sm text-muted-foreground md:px-6">{i + 1}</td>
                                    <td class="px-4 py-3 text-sm font-medium md:px-6">{member.name}</td>
                                    <td class="px-4 py-3 text-sm text-muted-foreground md:px-6">{member.username}</td>
                                    <td class="hidden px-4 py-3 md:table-cell md:px-6">
                                        <span class="rounded-full bg-decha-pink-100 px-2.5 py-0.5 text-xs font-semibold text-decha-pink-700 dark:bg-decha-pink-900/30 dark:text-decha-pink-300">
                                            {member.role}
                                        </span>
                                    </td>
                                    <td class="px-4 py-3 text-right md:px-6">
                                        <div class="flex items-center justify-end gap-2">
                                            <button
                                                onclick={() => openEdit(member)}
                                                class="rounded-lg px-3 py-1.5 text-xs font-medium text-blue-600 transition-colors hover:bg-blue-50"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onclick={() => handleDelete(member)}
                                                class="rounded-lg px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50"
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>

                {#if members.length === 0}
                    <div class="px-6 py-12 text-center text-sm text-muted-foreground">
                        Belum ada member. Klik "Tambah Member" untuk menambahkan.
                    </div>
                {/if}
            </Card.Content>
        </Card.Root>
    </div>

    <!-- ── Modal Add/Edit ───────────────────────────────────── -->
    {#if isModalOpen}
        <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions a11y_interactive_supports_focus -->
        <div
            class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onclick={closeModal}
            onkeydown={(e) => e.key === "Escape" && closeModal()}
            role="dialog"
            tabindex="-1"
        >
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div
                class="w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl"
                onclick={(e) => e.stopPropagation()}
            >
                <!-- Header -->
                <div class="bg-linear-to-r from-decha-pink-400 via-decha-pink-500 to-decha-pink-600 px-6 py-4 text-white">
                    <div class="flex items-center justify-between">
                        <h2 class="text-lg font-bold">
                            {mode === "add" ? "Tambah Member" : "Edit Member"}
                        </h2>
                        <button onclick={closeModal} class="flex size-7 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30" aria-label="Tutup">
                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Form -->
                <form onsubmit={handleSubmit} class="space-y-4 p-6">
                    <div>
                        <label for="name" class="mb-1 block text-sm font-medium">Nama</label>
                        <input
                            id="name"
                            type="text"
                            bind:value={form.name}
                            class="w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-decha-pink-400/40"
                            placeholder="Nama lengkap"
                            required
                        />
                        {#if form.errors.name}
                            <p class="mt-1 text-xs text-red-500">{form.errors.name}</p>
                        {/if}
                    </div>

                    <div>
                        <label for="username" class="mb-1 block text-sm font-medium">Username</label>
                        <input
                            id="username"
                            type="text"
                            bind:value={form.username}
                            class="w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-decha-pink-400/40"
                            placeholder="username"
                            required
                        />
                        {#if form.errors.username}
                            <p class="mt-1 text-xs text-red-500">{form.errors.username}</p>
                        {/if}
                    </div>

                    <div>
                        <label for="password" class="mb-1 block text-sm font-medium">
                            Password {mode === "edit" ? "(kosongkan jika tidak diubah)" : ""}
                        </label>
                        <input
                            id="password"
                            type="password"
                            bind:value={form.password}
                            class="w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-decha-pink-400/40"
                            placeholder={mode === "add" ? "Password" : "Biarkan kosong"}
                            required={mode === "add"}
                        />
                        {#if form.errors.password}
                            <p class="mt-1 text-xs text-red-500">{form.errors.password}</p>
                        {/if}
                    </div>

                    <div>
                        <label for="role" class="mb-1 block text-sm font-medium">Role</label>
                        <select
                            id="role"
                            bind:value={form.role}
                            class="w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-decha-pink-400/40"
                        >
                            <option value="member">Member</option>
                            <option value="admin">Admin</option>
                        </select>
                        {#if form.errors.role}
                            <p class="mt-1 text-xs text-red-500">{form.errors.role}</p>
                        {/if}
                    </div>

                    <div class="flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onclick={closeModal}
                            class="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            disabled={form.processing}
                            class="rounded-lg bg-decha-pink-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-decha-pink-700 disabled:opacity-50"
                        >
                            {form.processing ? "Menyimpan..." : mode === "add" ? "Simpan" : "Perbarui"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    {/if}
</NavLayout>
