import { Box, Grid, TextField, Typography } from "@mui/material";
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
            .then((data) => data.json())
            .then((response) => {
                setProducto(response)
            })
    }, [])

    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Typography variant="h4" color='secondary' sx={{ textAlign: 'center', mb: 3 }}>Shop</Typography>
            <Box maxWidth={'lg'} sx={{ margin: 'auto' }}>
                <Box sx={{ display: 'flex', marginTop: 6, padding: 6 }}>
                    <Box >
                        <Box
                            component='img'
                            src={`${baseURL}${producto.imagen}`}
                            width={'400px'}
                            height={'500px'}
                        />
                    </Box>
                    <Box sx={{ marginLeft: 5 }}>
                        <Box sx={{ marginTop: 1 }}>
                            <Typography variant="h4" color="tertiary">{producto.nombre?.toUpperCase()}</Typography>
                        </Box>
                        <Box sx={{ marginTop: 3 }}>
                            <Typography sx={{ fontSize: '18px' }}>{producto.precio}</Typography>
                        </Box>
                        <Box sx={{ marginTop: 3 }}>
                            <Typography variant='h5'>{producto.descripción}</Typography>
                        </Box>
                        <Box sx={{ marginTop: 3 }}>
                            <Typography variant='h6'>Cantidad</Typography>
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