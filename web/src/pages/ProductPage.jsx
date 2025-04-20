import { Box, Grid, TextField, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/Appbar";
import { useParams } from "react-router";
import ShoppingCart from "../components/store/ShoppingCart";

export default function () {
    let { name } = useParams()
    let mayusc = name.toUpperCase()
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Typography variant="h4" color='secondary' sx={{ textAlign: 'center', mb: 3 }}>Shop</Typography>
            <Box maxWidth={'lg'} sx={{ margin: 'auto' }}>
                <Box container sx={{ display: 'flex', marginTop: 6, padding: 6 }}>
                    <Box >
                        <Box
                            component='img'
                            src='https://placehold.co/500x400/png'
                        />
                    </Box>
                    <Box sx={{ marginLeft: 5 }}>
                        <Box sx={{ marginTop: 1 }}>
                            <Typography variant="h4" color="tertiary">{mayusc}</Typography>
                        </Box>
                        <Box sx={{ marginTop: 3 }}>
                            <Typography sx={{ fontSize: '18px' }}>€ 60.00</Typography>
                        </Box>
                        <Box sx={{ marginTop: 3 }}>
                            <Typography variant='h5'>Descripción</Typography>
                        </Box>
                        <Box sx={{ marginTop: 3 }}>
                            <Typography variant='h5'>Otra información útil</Typography>
                        </Box>
                        <Box component="form"
                            sx={{ '& .MuiTextField-root': { width: '15ch' } }}
                            noValidate
                            autoComplete="on">
                            <TextField
                                margin="dense"
                                id="outlined-number"
                                onChange={(event) =>
                                    event.target.value < 1
                                        ? (event.target.value = 1)
                                        : event.target.value
                                }
                                type="number"
                                size="small"
                                defaultValue={1}
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <ShoppingCart></ShoppingCart>
        </>
    )
}