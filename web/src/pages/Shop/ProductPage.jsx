import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { useParams } from "react-router";
import ShoppingCart from "../../components/store/ShoppingCart";
import { useEffect, useState } from "react";
import { baseURL } from "../../services/api/api";
import Titulo from "../../components/layout/Titulo";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Layout from "../../components/layout/Layout";
import GreenButton from "../../components/layout/GreenButton";

export default function ProductPage() {
    const [producto, setProducto] = useState([])
    const [cantidad, setCantidad] = useState(1)
    const { addToShoppingCart } = useShoppingCartContext()
    let { slug } = useParams()

    useEffect(() => {
        fetch(`${baseURL}/shop/detalles-producto-slug/${slug}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                
                setProducto(data)
            })
    }, [])

    return (
        <>
            <Layout>
                <Titulo titulo={'Tienda'}></Titulo>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 8 }}>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                        <Box sx={{
                            width: '100%',
                            aspectRatio: '4 / 3',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                        }}>
                            <Box
                                component='img'
                                src={`${producto.imagen}`}
                                sx={{
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                    objectFit: 'contain'
                                }}
                            />
                        </Box>
                        <Box sx={{ minWidth: { md: 300, lg: 400 } }}>
                            <Typography variant="h4" color="tertiary">{producto.nombre?.toUpperCase()}</Typography>
                            <Typography sx={{ fontSize: '18px', marginTop: 3 }}>€ {producto.precio}</Typography>
                            <Typography variant='h5' sx={{ marginTop: 2 }}>{producto.descripción}</Typography>
                            <Typography variant='h6' sx={{
                                marginTop: {
                                    xs: 1,
                                    sm: 2
                                }
                            }}>Cantidad</Typography>
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
                                    onChange={(event) => {
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
                            <Box sx={{
                                marginTop: {
                                    xs: 1,
                                    sm: 3
                                }
                            }}>
                                <GreenButton onClick={() => { addToShoppingCart({ ...producto, cantidad }) }}  texto={'Add to Cart'}/>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
                <ShoppingCart></ShoppingCart>
            </Layout>
        </>
    )
}