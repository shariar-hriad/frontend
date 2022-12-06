import { createSlice } from '@reduxjs/toolkit'
import { FaCode } from 'react-icons/fa'
import { MdDesignServices } from 'react-icons/md'

const initialState = [
    { id: 1, title: 'Front-end Development', description: 'Front-end Development with Modern Technology like React, NextJs' },
    { id: 2, title: 'Static Site Development', description: 'Static Site generation with HTML5,CSS3,Js,jQuery,Sass,Bootstrap,Tailwind CSS' },
]

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
})

export default servicesSlice.reducer
