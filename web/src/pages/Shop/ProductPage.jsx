import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { useParams } from "react-router";
import ShoppingCart from "../../components/store/ShoppingCart";
import { useEffect, useState } from "react";
import { baseURL } from "../../services/api/api";
import Titulo from "../../components/layout/Titulo";
import ResponsiveAppBar from "../../components/layout/Appbar";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

export default function ProductPage() {
    const [producto, setProducto] = useState([])
    const [cantidad, setCantidad] = useState(1)
    const { shoppingCart, addToShoppingCart } = useShoppingCartContext()
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
            <Titulo titulo={'Tienda'}></Titulo>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
                    <Box sx={{
                        width: '100%',
                        aspectRatio: '16 / 9',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Box
                            component='img'
                            src={`${baseURL}${producto.imagen}`}
                            sx={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </Box>
                    <Box>
                        <Typography variant="h4" color="tertiary">{producto.nombre?.toUpperCase()}</Typography>
                        <Typography sx={{ fontSize: '18px', marginTop: 3 }}>€ {producto.precio}</Typography>
                        <Typography variant='h5' sx={{ marginTop: 2 }}>{producto.descripción}</Typography>
                        <Typography variant='h6' sx={{ marginTop: {
                            xs:1,
                            sm:2
                        } }}>Cantidad</Typography>
                        <Box component="form"
                            sx={{ '& .MuiTextField-root': { width: '15ch' } }}
                            noValidate
                            autoComplete="on">
                            <TextField
                                margin="dense"
                                id="outlined-number"
                                value={cantidad}
                                type="number"
                                size="small"
                                onChange={(event)=>{
                                    const value = Math.max(1, parseInt(event.target.value || 1))
                                    setCantidad(value)
                                }}
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                            />
                        </Box>
                        <Box sx={{ marginTop: {
                            xs:1,
                            sm:3
                        } }}>
                            <Button
                                onClick={() => { addToShoppingCart({ ...producto, cantidad }) }}
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