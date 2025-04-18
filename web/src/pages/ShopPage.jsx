import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/Appbar";
import Gallery from "../components/obras/Gallery";
import Footer from "../components/Footer";
import ShoppingCart from "../components/store/ShoppingCart";

export default function ShopPage() {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Typography variant="h4" color='secondary' sx={{ textAlign: 'center', mb: 4 }}>Shop</Typography>
            <Gallery></Gallery>
            <ShoppingCart></ShoppingCart>
            <Footer></Footer>
        </>
    )
}