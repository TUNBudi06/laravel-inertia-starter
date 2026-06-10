import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \App\Http\Controllers\Auth\MainController::login
 * @see app/Http/Controllers/Auth/MainController.php:12
 * @route '/iseki_decha/public'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/iseki_decha/public',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\MainController::login
 * @see app/Http/Controllers/Auth/MainController.php:12
 * @route '/iseki_decha/public'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\MainController::login
 * @see app/Http/Controllers/Auth/MainController.php:12
 * @route '/iseki_decha/public'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\MainController::login
 * @see app/Http/Controllers/Auth/MainController.php:12
 * @route '/iseki_decha/public'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\MainController::login
 * @see app/Http/Controllers/Auth/MainController.php:12
 * @route '/iseki_decha/public'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\MainController::login
 * @see app/Http/Controllers/Auth/MainController.php:12
 * @route '/iseki_decha/public'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\MainController::login
 * @see app/Http/Controllers/Auth/MainController.php:12
 * @route '/iseki_decha/public'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \App\Http\Controllers\Auth\MainController::loginPost
 * @see app/Http/Controllers/Auth/MainController.php:16
 * @route '/iseki_decha/public/login'
 */
export const loginPost = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: loginPost.url(options),
    method: 'post',
})

loginPost.definition = {
    methods: ["post"],
    url: '/iseki_decha/public/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\MainController::loginPost
 * @see app/Http/Controllers/Auth/MainController.php:16
 * @route '/iseki_decha/public/login'
 */
loginPost.url = (options?: RouteQueryOptions) => {
    return loginPost.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\MainController::loginPost
 * @see app/Http/Controllers/Auth/MainController.php:16
 * @route '/iseki_decha/public/login'
 */
loginPost.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: loginPost.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\MainController::loginPost
 * @see app/Http/Controllers/Auth/MainController.php:16
 * @route '/iseki_decha/public/login'
 */
    const loginPostForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: loginPost.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\MainController::loginPost
 * @see app/Http/Controllers/Auth/MainController.php:16
 * @route '/iseki_decha/public/login'
 */
        loginPostForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: loginPost.url(options),
            method: 'post',
        })
    
    loginPost.form = loginPostForm
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:10
 * @route '/iseki_decha/public/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/iseki_decha/public/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:10
 * @route '/iseki_decha/public/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:10
 * @route '/iseki_decha/public/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:10
 * @route '/iseki_decha/public/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:10
 * @route '/iseki_decha/public/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:10
 * @route '/iseki_decha/public/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:10
 * @route '/iseki_decha/public/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm