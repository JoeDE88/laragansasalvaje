import { Box, Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/Appbar";
import { useParams } from "react-router";
import ShoppingCart from "../components/store/ShoppingCart";

export default function () {
    let { name } = useParams()
    let mayusc = name.toUpperCase()
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Typography variant="h4" color='secondary' sx={{ textAlign: 'center', mb: 4 }}>Shop</Typography>
            <Box maxWidth={'lg'} sx={{ margin: 'auto' }}>
                <Box container sx={{ display: 'flex', marginTop: 6, padding: 6 }}>
                    <Box >
                        <Box
                            component='img'
                            src='https://placehold.co/600x600/png'
                        />
                    </Box>
                    <Box sx={{marginLeft:5}}>
                        <Typography variant="h3" color="tertiary">{mayusc}</Typography>
                        <Typography variant="h6">Precio</Typography>
                    </Box>
                </Box>
            </Box>
            <ShoppingCart></ShoppingCart>
        </>
    )
}