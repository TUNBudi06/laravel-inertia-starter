import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MemberController::index
 * @see app/Http/Controllers/MemberController.php:11
 * @route '/iseki_decha/public/dashboard/member'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/iseki_decha/public/dashboard/member',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::index
 * @see app/Http/Controllers/MemberController.php:11
 * @route '/iseki_decha/public/dashboard/member'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::index
 * @see app/Http/Controllers/MemberController.php:11
 * @route '/iseki_decha/public/dashboard/member'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MemberController::index
 * @see app/Http/Controllers/MemberController.php:11
 * @route '/iseki_decha/public/dashboard/member'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MemberController::store
 * @see app/Http/Controllers/MemberController.php:20
 * @route '/iseki_decha/public/dashboard/member/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/iseki_decha/public/dashboard/member/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MemberController::store
 * @see app/Http/Controllers/MemberController.php:20
 * @route '/iseki_decha/public/dashboard/member/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::store
 * @see app/Http/Controllers/MemberController.php:20
 * @route '/iseki_decha/public/dashboard/member/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MemberController::update
 * @see app/Http/Controllers/MemberController.php:39
 * @route '/iseki_decha/public/dashboard/member/{member}'
 */
export const update = (args: { member: number | { id: number } } | [member: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/iseki_decha/public/dashboard/member/{member}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\MemberController::update
 * @see app/Http/Controllers/MemberController.php:39
 * @route '/iseki_decha/public/dashboard/member/{member}'
 */
update.url = (args: { member: number | { id: number } } | [member: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { member: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { member: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    member: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        member: typeof args.member === 'object'
                ? args.member.id
                : args.member,
                }

    return update.definition.url
            .replace('{member}', parsedArgs.member.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::update
 * @see app/Http/Controllers/MemberController.php:39
 * @route '/iseki_decha/public/dashboard/member/{member}'
 */
update.put = (args: { member: number | { id: number } } | [member: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\MemberController::destroy
 * @see app/Http/Controllers/MemberController.php:63
 * @route '/iseki_decha/public/dashboard/member/{member}'
 */
export const destroy = (args: { member: number | { id: number } } | [member: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/iseki_decha/public/dashboard/member/{member}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MemberController::destroy
 * @see app/Http/Controllers/MemberController.php:63
 * @route '/iseki_decha/public/dashboard/member/{member}'
 */
destroy.url = (args: { member: number | { id: number } } | [member: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { member: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { member: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    member: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        member: typeof args.member === 'object'
                ? args.member.id
                : args.member,
                }

    return destroy.definition.url
            .replace('{member}', parsedArgs.member.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::destroy
 * @see app/Http/Controllers/MemberController.php:63
 * @route '/iseki_decha/public/dashboard/member/{member}'
 */
destroy.delete = (args: { member: number | { id: number } } | [member: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const MemberController = { index, store, update, destroy }

export default MemberController