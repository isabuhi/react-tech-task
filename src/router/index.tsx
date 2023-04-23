import {
    BrowserRouter,
    Routes,
    Route,
    
} from "react-router-dom";


import SearchFin from "../components/searchFin";
import Profile from "../components/profile";
import SignUp from "../components/signUp";
import Credit from "../components/credit"

import { useAppSelector } from "../app/hooks"



export default function AppRouter() {
    const fin = useAppSelector((state) => state.profile.fin)

    console.log(fin)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< SearchFin />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="profile" element={fin ? <Profile /> : null} />
                <Route path="credit/:id" element={fin ? <Credit /> : null} />
            </Routes>
        </BrowserRouter>
    )
}


        
    