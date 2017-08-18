// import { getUserFromCookie, getUserFromLocalStorage } from '~/utils/auth'

// export default function ({ isServer, store, req, route, redirect }) {
//    // If nuxt generate, pass this middleware
//   if (isServer && !req) return
//   const loggedUser = isServer ? getUserFromCookie(req) : getUserFromLocalStorage()
//   if (loggedUser) {
//   	// store.dispatch('getUserInfo')
//   } else if (!loggedUser && route.name !== 'login') {
//   	redirect('/login', { page: route.fullPath })
//   }
// }
