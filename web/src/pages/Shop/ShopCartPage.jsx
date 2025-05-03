import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Titulo from "../../components/layout/Titulo"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"
import ResponsiveAppBar from "../../components/layout/Appbar";
import { baseURL } from "../../services/api/api";
import DeleteIcon from '@mui/icons-material/Delete';

export default function () {

    const { shoppingCart } = useShoppingCartContext()

    console.log(shoppingCart);

    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Titulo titulo={'Tu carrito'}></Titulo>
            {shoppingCart.map((item) => {
                return (
                    <Card key={item.name} sx={{ margin: 'auto', width: { md: 750, xs: 400 }, backgroundColor: 'blancoPerla.main', mb: 1 }}>
                        <CardContent>
                            <Stack direction={'row'} spacing={1}>
                                <Box
                                    component='img'
                                    src={`${baseURL}${item.imagen}`}
                                    sx={{ width: '150px', objectFit: 'cover' }}
                                />
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flex: 1,
                                    px: 1 }}>
                                    <Typography variant="h6">{item.nombre.toUpperCase()}</Typography>
                                    <Typography variant="h6">€ {item.precio}</Typography>
                                    <DeleteIcon></DeleteIcon>

                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                )
            }
            )}
        </>
    )
}