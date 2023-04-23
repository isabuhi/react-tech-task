import { createSlice } from '@reduxjs/toolkit'


export interface Credit {
    activitySector: string | null
    monthlyIncome: number | null
    workExpYear: number | null
    workExpMonth: number | null
    region: string | null
    businessAddress: string | null
    currency: string | null
    purposeOfCredit: string | null
    amount: number | null
    duration: number | null 
    persentage: number | null
}

export const initialCredit: Credit = {
    activitySector: null,
    monthlyIncome: null,
    workExpYear: null,
    workExpMonth: null,
    region: null,
    businessAddress: null,
    currency: null,
    purposeOfCredit: null,
    amount: null,
    duration: null,
    persentage: null
}

export const creditSlice = createSlice({
    name: 'credit',
    initialState: initialCredit,
    reducers: {
        addCredit: (state, action): Credit => {
            return { ...state, ...action.payload }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addCredit } = creditSlice.actions

export default creditSlice.reducer