import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode: true,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setMode: (state) => {
            state.darkMode = !state.darkMode
        },
    },
})

export const { setMode } = themeSlice.actions

export default themeSlice.reducer
