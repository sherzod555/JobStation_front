import { destroyCookie, parseCookies, setCookie } from 'nookies'

export const saveUser = (data) => {
    if (data && data.access_token) {
        setCookie(null, 'USER', JSON.stringify(data), {
            maxAge: process.env.COOKIE_TIME,
            path: '/',
        })
    }
}

export const getUser = () => {
    const cookies = parseCookies()
    return cookies.USER ? JSON.parse(cookies.USER) : {}
}

export const logout = (event) => {
    event && event.preventDefault()
    destroyCookie(null, 'USER')
    setTimeout(() => {
        window && window.location.replace('/')
    }, 1000)
}