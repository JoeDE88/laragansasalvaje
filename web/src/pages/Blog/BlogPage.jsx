import { Box, useMediaQuery, useTheme } from "@mui/material";
import BlogGrid from "../../components/blog/structure/BlogGrid.jsx";
import ResponsiveAppBar from "../../components/layout/Appbar.jsx";
import Footer from "../../components/layout/Footer.jsx";
import Titulo from "../../components/layout/Titulo.jsx";
import ShoppingCart from "../../components/store/ShoppingCart.jsx";

export default function BlogPage() {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column' // 100% altura de la ventana
        }}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Titulo titulo={'Blog'}></Titulo>
            <BlogGrid></BlogGrid>
            <ShoppingCart></ShoppingCart>
            <Footer></Footer>
        </Box>
    )
}