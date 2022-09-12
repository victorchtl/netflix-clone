import { createSlice } from '@reduxjs/toolkit'

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = notificationsSlice.actions

export const notificationsReducer = state => state.notifications.value

export default notificationsSlice.reducer