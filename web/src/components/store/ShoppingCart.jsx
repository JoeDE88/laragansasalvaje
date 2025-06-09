import { Box, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { NavLink } from "react-router";

export default function ShoppingCart() {

    const { shoppingCart } = useShoppingCartContext()

    if (shoppingCart.length === 0) return null;

    const totalItems = shoppingCart.reduce((sum, item) => sum + item.cantidad || 1, 0)
    const totalPrice = shoppingCart.reduce((sum, item) => sum + item.precio * (item.cantidad || 1), 0)

    return (
        <>
            <Box
                position={'sticky'}
                component={NavLink}
                to='/carrito'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    bottom: 50,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: { xs: '270px', lg: '340px' },
                    height: '65px',
                    paddingX: 2,
                    margin: 0,
                    borderRadius: 8,
                    backgroundColor: 'secondary.main',
                    color: 'secondary.text',
                    textDecoration: 'None'
                }}>
                <Box sx={{
                    px: 1
                }}>
                    <ShoppingCartIcon variant='h6'></ShoppingCartIcon>
                </Box>
                <Box sx={{
                    p: 1
                }}>
                    <Typography variant="h6">
                        {totalItems} item{totalItems !== 1 ? 's' : ''}
                    </Typography>
                </Box>
                <Box sx={{ p: 1, marginLeft: 'auto', marginRight: 3, px: { lg: 3 } }}>
                    <Typography variant='h6'>
                        {totalPrice.toFixed(2)} €
                    </Typography>
                </Box>
            </Box>
        </>
    )
}