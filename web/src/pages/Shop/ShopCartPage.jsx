import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import Titulo from "../../components/layout/Titulo"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"
import ResponsiveAppBar from "../../components/layout/Appbar";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function () {

    const { shoppingCart, removeFromShoppingCart, addToShoppingCart, decreaseQuantity } = useShoppingCartContext()

    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Titulo titulo={'Tu carrito'}></Titulo>
            {shoppingCart.map((item) => {
                return (
                    <Card key={item.name} sx={{ margin: 'auto', width: { md: 750, xs: 400 }, backgroundColor: 'blancoPerla.main', mb: 1 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex' }}>
                                <Box
                                    component='img'
                                    src={`${item.imagen}`}
                                    sx={{ width: '150px', objectFit: 'cover' }}
                                />
                                <Stack direction={'column'} width={'100%'} justifyContent={'space-between'}>
                                    <Stack direction={'row'} spacing={3}>
                                        <Box sx={{
                                            display: 'flex',
                                            flexFlow: { xs: 'column', md: 'row' },
                                            justifyContent: { xs: 'top', md: 'space-between' },
                                            flex: 1,
                                            px: 2
                                        }}>
                                            <Typography variant="h6">{item.nombre.toUpperCase()}</Typography>
                                            <Typography variant="h6">€ {item.precio}</Typography>
                                        </Box>
                                        <Box>
                                            <Button size="small" onClick={() => removeFromShoppingCart(item.id)}>
                                                <DeleteIcon color="secondary"></DeleteIcon>
                                            </Button>
                                        </Box>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        paddingX={2}
                                    >
                                        <Button color="blancoPerla"
                                            sx={{ color: 'tertiary.main' }}
                                            onClick={() => decreaseQuantity(item.id)}>
                                            <RemoveIcon />
                                        </Button>
                                        <Box sx={{ width: '10px' }}>
                                            <Typography>{item.cantidad}</Typography>
                                        </Box>
                                        <Button color="blancoPerla" onClick={() => addToShoppingCart(item)}
                                            variant="contained"
                                            size="small"
                                            sx={{ color: 'tertiary.main' }}
                                            disableElevation>
                                            <AddIcon>
                                            </AddIcon>
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Box>
                        </CardContent>
                    </Card>
                )
            }
            )}
        </>
    )
}