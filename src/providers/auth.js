import client from './client'
export const login = credentials =>
    client.post('users/login', credentials)