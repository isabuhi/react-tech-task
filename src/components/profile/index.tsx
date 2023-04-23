import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function Profile() {
    const navigate = useNavigate()

    const profile = useAppSelector((state) => state.profile)

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md" sx={{mb: 8} }>
                <Container component="main" maxWidth="xs" sx={{ marginLeft: "unset" }}>
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
                        </Avatar>
                        <Typography component="h1" variant="h5" sx={{ marginBottom: 3 }}>
                            Profile information
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
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
                                        value={profile.firstName}
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
                                        value={profile.lastName}
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
                                        value={profile.email}
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
                                        value={profile.password}
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
                                required
                                fullWidth
                                name="currentAddress"
                                label="Current address"
                                type="text"
                                id="currentAddress"
                                value={profile.currentAddress}
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
                                value={profile.fin}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                name="seriesAndNumber"
                                label="ID serie and number"
                                type="text"
                                id="seriesAndNumber"
                                value={profile.seriesAndNumber}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                name="registrationAddress"
                                label="Registration address"
                                type="text"
                                id="registrationAddress"
                                value={profile.registrationAddress}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                name="birthDate"
                                label="Birth date"
                                type="text"
                                id="birthDate"
                                value={profile.birthDate}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                name="mobileNumber"
                                label="Mobile number"
                                type="text"
                                id="mobileNumber"
                                value={profile.mobileNumber}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                name="homeNumber"
                                label="Home number"
                                type="text"
                                id="homeNumber"
                                value={profile.homeNumber}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                name="nameLastnameFathername"
                                label="Full name and father name"
                                type="text"
                                id="nameLastnameFathername"
                                value={profile.nameLastnameFathername}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => {
                                    navigate(`/credit/${profile.id}`)
                                }
                                }
                            >
                                Apply credit
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
                        </Grid>
                    </Grid>
                </Container>

            </Container>
        </ThemeProvider>
    );
}