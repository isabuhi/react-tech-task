import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Box, Button, Alert} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { request } from "../../utils/axiosCore"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { addProfile } from "../profile/profileSlice"
import type { Profile } from "../profile/profileSlice"

import { useStore } from "react-redux"

import { useNavigate, Link } from "react-router-dom";

const theme = createTheme();

export default function SearchFin() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [fin, setFin] = useState(true)
    const store = useStore()

    store.subscribe(() => {
        navigate("/profile")
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {       
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        request
            .get("customers")
            .then(response => {
                let profile: Profile | undefined = response.data.find((profil:any) => {
                    return profil.fin === data.get("finCode")
                    
                })
                if (profile) {
                    localStorage.setItem("myFin", JSON.stringify(profile.fin));
                    dispatch(addProfile(profile))
                }
                else {
                    setFin(false)
                }
            })
    };
    
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Enter ID card FIN code
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="finCode"
                            label="FIN code"
                            name="finCode"
                            autoComplete="finCode"
                            autoFocus
                        />
                        {fin ? null : <Alert severity="error">There is no such account!</Alert>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Search
                        </Button>
                      
                        <Link to={"/signup" }>
                            Sign up
                        </Link>
                        
                    </Box>
                    
                </Box>
            </Container>
        </ThemeProvider>
    );
}