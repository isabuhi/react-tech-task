import { createSlice } from '@reduxjs/toolkit'
import {Credit } from "../credit/creditSlice"

export interface Profile {
    id: number | null
    firstName: string | null,
    lastName: string | null,
    email: string | null
    password: string | null
    currentAddress: string | null
    fin: string | null
    seriesAndNumber: string | null
    registrationAddress: string | null
    birthDate: string | null
    mobileNumber: string | null
    homeNumber: string | null
    nameLastnameFathername: string | null
    credit: any
}




export const initialProfile: Profile = {
    email: null,
    password: null,
    currentAddress: null,
    fin: null,
    seriesAndNumber: null,
    registrationAddress: null,
    birthDate: null,
    mobileNumber: null,
    homeNumber: null,
    nameLastnameFathername: null,
    firstName: null,
    lastName: null,
    id: null,
    credit: null
}


export const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfile,
    reducers: {
        addProfile: (state, action): Profile => {
            return { ...state, ...action.payload }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addProfile } = profileSlice.actions

export default profileSlice.reducer
