import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/Appbar";
import { useParams } from "react-router";
import ShoppingCart from "../components/store/ShoppingCart";
import { useEffect, useState } from "react";
import { baseURL } from "../services/api/api";

export default function () {
    const [producto, setProducto] = useState([])
    let { slug } = useParams()

    useEffect(() => {
        fetch(`${baseURL}shop/productos/${slug}`)
            .then((response) => response.json())
            .then((data) => {
                setProducto(data)
            })
    }, [])

    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Typography variant="h4" color='secondary' sx={{ textAlign: 'center' }}>Shop</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 13 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                    <Box
                        component='img'
                        src={`${baseURL}${producto.imagen}`}
                        width={'400px'}
                        height={'500px'}
                    />
                    <Box>
                        <Typography variant="h4" color="tertiary">{producto.nombre?.toUpperCase()}</Typography>
                        <Typography sx={{ fontSize: '18px', marginTop:3 }}>{producto.precio}</Typography>
                        <Typography variant='h5' sx={{ marginTop: 2 }}>{producto.descripción}</Typography>
                        <Typography variant='h6' marginTop={3}>Cantidad</Typography>
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
                        <Box sx={{ marginTop: 5 }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={(theme) => ({
                                    backgroundColor: 'blancoPerla.main',
                                    color: 'tertiary.main',
                                    border: `solid 1px ${theme.palette.tertiary.main}`,
                                    "&:hover": {
                                        backgroundColor: 'tertiary.main',
                                        color: 'blancoPerla.main'
                                    }
                                })}
                                disableElevation
                            >Add to cart</Button>
                        </Box>
                    </Box>
                </Stack>
            </Box>

            <ShoppingCart></ShoppingCart>
        </>
    )
}