import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { request } from '../../utils/axiosCore';

import { useParams } from "react-router-dom"
import { addCredit, Credit } from "./creditSlice"
import { useAppDispatch } from "../../app/hooks"
import { Dialog, Alert } from '@mui/material';

const theme = createTheme();


export default function CreditPage() {
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        const credit: Credit = {
            activitySector: data.get("activitySector") as string,
            monthlyIncome: data.get("monthlyIncome") as number | null,
            workExpYear: data.get("workExpYear") as number | null,
            workExpMonth: data.get("workExpMonth") as number | null,
            region: data.get("region") as string,
            businessAddress: data.get("businessAddress") as string,
            currency: data.get("currency") as string,
            purposeOfCredit: data.get("purposeOfCredit") as string,
            amount: data.get("amount") as number | null,
            duration: data.get("duration") as number | null,
            persentage: data.get("persentage") as number | null
        }
        request.patch(`customers/${id}`, { credit: credit }).then(() => {
            dispatch(addCredit(credit))
            setOpen(true)
        })
    }
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
            <Box component="form" onSubmit={handleSubmit}>
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h6" sx={{ textAlign: "start", marginTop: 3 }}>
                                Person information
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                name="activitySector"
                                label="Activity sector"
                                type="text"
                                id="activitySector"

                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                name="monthlyIncome"
                                label="Monthly income"
                                type="number"
                                id="monthlyIncome"

                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                name="workExpYear"
                                label="Work experience (year)"
                                type="number"
                                id="workExpYear"

                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                name="workExpMonth"
                                label="Work experience (month)"
                                type="number"
                                id="workExpMonth"

                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                name="region"
                                label="Region"
                                type="text"
                                id="region"

                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                name="businessAddress"
                                label="Business address"
                                type="text"
                                id="businessAddress"

                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h6" sx={{ textAlign: "start", marginTop: 3 }}>
                                Credit information
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                name="currency"
                                label="Currency"
                                type="text"
                                id="currency"

                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                name="purposeOfCredit"
                                label="Purpose of credit"
                                type="text"
                                id="purposeOfCredit"

                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                name="amount"
                                label="Amount"
                                type="number"
                                id="amount"

                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                name="duration"
                                label="Duration"
                                type="number"
                                id="duration"

                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                name="persentage"
                                label="Persentage"
                                type="number"
                                id="persentage"

                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Apply
                    </Button>
                </Container>
            </Box>

        </ThemeProvider>
    );
}