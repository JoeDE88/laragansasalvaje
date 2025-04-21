import { Box, Button, Grid, TextField, Typography } from "@mui/material";
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
                <Box sx={{
                    display: {
                        lg: 'flex'
                    },
                    justifyContent:'center',
                    marginTop: 6,
                    padding: 6,

                }}>
                    <Box sx={{display:'flex',justifyContent:'center'}}>
                        <Box
                            component='img'
                            src={`${baseURL}${producto.imagen}`}
                            width={'400px'}
                            height={'500px'}
                        />
                    </Box>
                    <Box sx={{ marginLeft: {lg:8,md:0}, display:'flex',flexDirection:'column',alignContent:'center'}}>
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
                </Box>
            </Box>
            <ShoppingCart></ShoppingCart>
        </>
    )
}