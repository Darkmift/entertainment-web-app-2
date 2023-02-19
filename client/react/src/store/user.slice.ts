import { createSlice } from '@reduxjs/toolkit'
import LocalStorageService from '../utils/localStorage'


type UserState = {
    isLoggedIn: boolean
}

const initialState: UserState = {
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state: UserState) => {
            state.isLoggedIn = true
        },
        logout: (state: UserState) => {
            state.isLoggedIn = false
            LocalStorageService.delete('token')
        },
    },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer