import {useEffect } from "react"
import AppRouter from "./router"

import { useAppDispatch, useAppSelector } from "./app/hooks"
import { addProfile } from "./components/profile/profileSlice"
import type { Profile } from "./components/profile/profileSlice"
import { request } from "./utils/axiosCore"


function App() {
    const dispatch = useAppDispatch()


    useEffect(() => {

        let fin: string | null
        fin = localStorage.getItem("myFin")
        if (fin) {
            request
                .get("customers")
                .then(response => {
                    
                    let profile: Profile | undefined = response.data.find((profil: any) => {
                        return profil.fin === JSON.parse(fin as string)

                    })
                    
                    if (profile) {
                        dispatch(addProfile(profile))
                    }
                })
        }
    },[])
    
    return (
        <div className="App">
            <AppRouter />
        </div>
    );
}

export default App;
