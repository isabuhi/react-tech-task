import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { initialProfile } from '../profile/profileSlice';
import { request } from '../../utils/axiosCore';

import { useNavigate } from "react-router-dom"
import { Dialog, Alert} from '@mui/material';


const theme = createTheme();

export default function SignUp() {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const profile =
        {
            firstName: data.get("firstName") as string,
            lastName: data.get("lastName") as string,
            email: data.get("email") as string,
            password: data.get("password") as string,
            currentAddress: data.get("currentAddress") as string,
            fin: data.get("fin") as string,
            seriesAndNumber: data.get("seriesAndNumber") as string,
            registrationAddress: data.get("registrationAddress") as string,
            birthDate: data.get("birthDate") as string,
            mobileNumber: data.get("mobileNumber") as string,
            homeNumber: data.get("homeNumber") as string,
            nameLastnameFathername: data.get("nameLastnameFathername") as string
        };
        console.log(profile)
        request.post("customers", { ...initialProfile, ...profile }).then(() => {
            setOpen(true)
        })
    };
    


    

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                closeAfterTransition
                onClose={handleClose}
            >
                <Alert severity="success">Success!</Alert>
            </Dialog>
            <Container maxWidth="md" sx={{ mb: 8 }}>
                <Box component="form" onSubmit={handleSubmit} >
                    <Container maxWidth="xs" sx={{ marginLeft: "unset" }}>
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                alignSelf: "start"
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            </Avatar>
                            <Typography component="h1" variant="h5" sx={{ marginBottom: 3, } }>
                                Sign Up
                            </Typography>
                            <Box sx={{ mt: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="family-name"

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"

                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                    <Container maxWidth="md">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography component="h1" variant="h6" sx={{ textAlign: "start", marginTop: 4 }}>
                                    Additional information
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    name="currentAddress"
                                    label="Current address"
                                    type="text"
                                    id="currentAddress"

                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    required
                                    fullWidth
                                    name="fin"
                                    label="FIN code"
                                    type="text"
                                    id="fin"

                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    name="seriesAndNumber"
                                    label="ID serie and number"
                                    type="text"
                                    id="seriesAndNumber"

                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    name="registrationAddress"
                                    label="Registration address"
                                    type="text"
                                    id="registrationAddress"

                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    name="birthDate"
                                    label="Birth date"
                                    type="text"
                                    id="birthDate"

                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    name="mobileNumber"
                                    label="Mobile number"
                                    type="text"
                                    id="mobileNumber"

                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    name="homeNumber"
                                    label="Home number"
                                    type="text"
                                    id="homeNumber"

                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    name="nameLastnameFathername"
                                    label="Full name and father name"
                                    type="text"
                                    id="nameLastnameFathername"

                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign up
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ mt: 3, mb: 2, ml: 2 }}
                            onClick={() => {
                                navigate(`/`)
                            }
                            }
                        >
                            Search FIN
                        </Button>
                    </Container>
                </Box>

            </Container>
        </ThemeProvider>
    );
}