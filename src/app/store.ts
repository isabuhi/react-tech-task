import { configureStore } from '@reduxjs/toolkit'
import creditSlice from '../components/credit/creditSlice'
import profileSlice from "../components/profile/profileSlice"





const store = configureStore({
    reducer: {
        profile: profileSlice,
        credit: creditSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
