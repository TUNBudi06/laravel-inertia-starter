<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { router} from "@inertiajs/svelte";
    import {
        FieldGroup,
        Field,
        FieldLabel,
        FieldError
    } from "$lib/components/ui/field/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { cn } from "$lib/utils.js";
    import type { HTMLAttributes } from "svelte/elements";
    import { RetroGrid } from "$lib/components/magic/retro-grid";
    import { Meteors } from "$lib/components/magic/meteors";
    import {useHttp} from "@inertiajs/svelte";
    import {toast} from "svelte-sonner";
    import {loginPost} from "$routes";

    let { class: className, ...restProps }: HTMLAttributes<HTMLDivElement> = $props();
    const id = $props.id();

    const form = useHttp({
        username: "",
        password: "",
        remember: false
    })

    function formSubmit(e: Event) {
        e.preventDefault()
        form.post(loginPost().url, {
            onSuccess: () => {
                toast.success("Login Berhasil", {
                    description: "Anda akan diarahkan ke dashboard",
                    onDismiss: () =>{
                        router.visit()
                    }
                })
            },
            onError: (errors) => {
                if (errors.username) {
                    toast.error("Login Gagal", {
                        description: errors.username,
                    });
                } else {
                    toast.error("Terjadi kesalahan", {
                        description: "Silakan periksa kembali input Anda.",
                    });
                }
            }
        });
    }
</script>

<div class="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-background p-6 md:p-10">
    <div class="z-10 flex w-full max-w-sm flex-col gap-6 shadow-2xl shadow-decha-pink-500">
        <div class={cn("flex flex-col gap-6", className)} {...restProps}>
            <Card.Root class="border-muted/50 bg-card/50 backdrop-blur-sm shadow-xl">
                <Card.Header class="space-y-1 text-center">
                    <Card.Title class="text-2xl font-bold tracking-tight">Selamat Datang</Card.Title>
                    <Card.Description>Silakan masukkan akun Anda untuk melanjutkan</Card.Description>
                </Card.Header>
                <Card.Content>
                    <form onsubmit={formSubmit}>
                        <FieldGroup class="gap-4">
                            <Field>
                                <FieldLabel for="username">Username</FieldLabel>
                                <Input
                                    id="username"
                                    type="text"
                                    bind:value={form.username}
                                    placeholder="username"
                                    required
                                    class="bg-background/50"
                                    aria-invalid={form.errors.username ? "true" : undefined}
                                />
                                <FieldError>{form.errors.username}</FieldError>
                            </Field>
                            <Field>
                                <div class="flex items-center justify-between">
                                    <FieldLabel for="password-{id}">Password</FieldLabel>
                                </div>
                                <Input
                                    id="password-{id}"
                                    bind:value={form.password}
                                    type="password"
                                    required
                                    class="bg-background/50"
                                    aria-invalid={form.errors.password ? "true" : undefined}
                                />
                                <FieldError>{form.errors.password}</FieldError>
                            </Field>
                            <div class="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    bind:checked={form.remember}
                                    class="h-4 w-4 rounded border-gray-300 text-decha-pink-600 focus:ring-decha-pink-500"
                                />
                                <label for="remember" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Ingat saya
                                </label>
                            </div>
                            <Button type="submit" disabled={form.processing} class="w-full font-semibold shadow-md transition-all hover:scale-[1.02]">
                                {form.processing ? "Logging in..." : "Login"}
                            </Button>
                        </FieldGroup>
                    </form>
                </Card.Content>
            </Card.Root>
        </div>
    </div>
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <Meteors number={20} />
    </div>
    <RetroGrid />
</div>
