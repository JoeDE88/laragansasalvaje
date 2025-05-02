import { Box, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

export default function ShoppingCart() {

    const { shoppingCart } = useShoppingCartContext()

    if (shoppingCart.length === 0) return null;

    const totalItems = shoppingCart.reduce((sum, item) => sum + item.cantidad || 1, 0)
    const totalPrice = shoppingCart.reduce((sum, item) => sum + item.precio * (item.cantidad || 1), 0)

    return (
        <>
            <Box
                position={{ xs: "fixed", lg: "fixed" }}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    bottom: {
                        xs: 30,
                        lg: 0   
                    },
                    left: {
                        xs: '50%',
                        lg: 0
                    },
                    transform: {
                        xs: 'translateX(-50%)',
                        lg: 'none'
                    },
                    width: {
                        xs: '270px',
                        lg: '100%'
                    },
                    height: '65px',
                    paddingX: {
                        xs: 2,
                        lg: 0
                    },
                    margin: 0,
                    borderRadius: {
                        xs: 8,
                        lg: 0
                    },
                    backgroundColor: 'secondary.main',
                    color: 'secondary.text',
                }}>
                <Box sx={{
                    px: {
                        xs: 1,
                        lg: 5
                    }
                }}>
                    <ShoppingCartIcon variant='h6'></ShoppingCartIcon>
                </Box>
                <Box sx={{
                    p: {
                        xs: 1,
                        lg: 0
                    }
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