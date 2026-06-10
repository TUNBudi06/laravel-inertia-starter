<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- NProgress styles --}}
    <style>
        #nprogress { pointer-events: none; }
        #nprogress .bar {
            background: oklch(0.592 0.249 0.584);
            position: fixed;
            z-index: 99999;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
        }
        #nprogress .peg {
            display: block;
            position: absolute;
            right: 0;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px oklch(0.592 0.249 0.584), 0 0 5px oklch(0.592 0.249 0.584);
            opacity: 1;
            transform: rotate(3deg) translate(0, -4px);
        }
        #nprogress .spinner { display: none; }
        .dark #nprogress .bar {
            background: oklch(0.656 0.241 354.308);
        }
        .dark #nprogress .peg {
            box-shadow: 0 0 10px oklch(0.656 0.241 354.308), 0 0 5px oklch(0.656 0.241 354.308);
        }

        {{-- Splash screen: minimal CSS-only ring fallback --}}
        #app-splash {
            position: fixed;
            inset: 0;
            z-index: 99998;
            display: flex;
            align-items: center;
            justify-content: center;
            background: oklch(1 0 0);
            transition: opacity 0.4s ease, visibility 0.4s ease;
        }
        .dark #app-splash {
            background: oklch(0.145 0.008 326);
        }
        #app-splash.hide {
            opacity: 0;
            visibility: hidden;
        }

        {{-- Minimal CSS ring (shown before Svelte loads) --}}
        .splash-css-ring {
            width: 64px;
            height: 64px;
            border: 4px solid oklch(0.916 0.016 343.14);
            border-top-color: oklch(0.592 0.249 0.584);
            border-radius: 50%;
            animation: splash-spin 0.8s linear infinite;
        }
        .dark .splash-css-ring {
            border-color: oklch(0.263 0.024 320.12);
            border-top-color: oklch(0.656 0.241 354.308);
        }
        @keyframes splash-spin {
            to { transform: rotate(360deg); }
        }

        {{-- Will be replaced by Svelte's AnimatedCircularProgressBar --}}
        #app-splash .svelte-ready { display: none; }
    </style>

    @vite(['resources/js/app.ts'])
    @inertiaHead
</head>
<body class="{{ app()->isLocal() ? 'debug-screens' : '' }}">
    {{-- Splash screen: minimal CSS spinner fallback, upgraded to Svelte component once JS loads --}}
    <div id="app-splash">
        <div id="splash-spinner" class="splash-css-ring"></div>
    </div>

    @inertia
</body>
</html>
