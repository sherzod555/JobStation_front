import api from './api'

export const registerUser = async ({ body }) => {
    const { data: user } = await api.post('api/auth/local/register', body)
    return user
}

export const login = async (body) => {
    const { data: user } = await api.post('api/auth/local', body)
    return user
}