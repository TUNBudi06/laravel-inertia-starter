import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\MainController::index
 * @see app/Http/Controllers/Auth/MainController.php:13
 * @route '/iseki_decha/public'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/iseki_decha/public',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\MainController::index
 * @see app/Http/Controllers/Auth/MainController.php:13
 * @route '/iseki_decha/public'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\MainController::index
 * @see app/Http/Controllers/Auth/MainController.php:13
 * @route '/iseki_decha/public'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\MainController::index
 * @see app/Http/Controllers/Auth/MainController.php:13
 * @route '/iseki_decha/public'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\MainController::loginForm
 * @see app/Http/Controllers/Auth/MainController.php:17
 * @route '/iseki_decha/public/login'
 */
export const loginForm = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: loginForm.url(options),
    method: 'post',
})

loginForm.definition = {
    methods: ["post"],
    url: '/iseki_decha/public/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\MainController::loginForm
 * @see app/Http/Controllers/Auth/MainController.php:17
 * @route '/iseki_decha/public/login'
 */
loginForm.url = (options?: RouteQueryOptions) => {
    return loginForm.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\MainController::loginForm
 * @see app/Http/Controllers/Auth/MainController.php:17
 * @route '/iseki_decha/public/login'
 */
loginForm.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: loginForm.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\MainController::logout
 * @see app/Http/Controllers/Auth/MainController.php:42
 * @route '/iseki_decha/public/dashboard/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

logout.definition = {
    methods: ["get","head"],
    url: '/iseki_decha/public/dashboard/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\MainController::logout
 * @see app/Http/Controllers/Auth/MainController.php:42
 * @route '/iseki_decha/public/dashboard/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\MainController::logout
 * @see app/Http/Controllers/Auth/MainController.php:42
 * @route '/iseki_decha/public/dashboard/logout'
 */
logout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\MainController::logout
 * @see app/Http/Controllers/Auth/MainController.php:42
 * @route '/iseki_decha/public/dashboard/logout'
 */
logout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logout.url(options),
    method: 'head',
})
const MainController = { index, loginForm, logout }

export default MainController