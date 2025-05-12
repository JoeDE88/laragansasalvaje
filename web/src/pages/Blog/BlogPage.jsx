import { Box } from "@mui/material";
import ResponsiveAppBar from "../../components/layout/Appbar.jsx";
import Footer from "../../components/layout/Footer.jsx";
import Titulo from "../../components/layout/Titulo.jsx";
import ShoppingCart from "../../components/store/ShoppingCart.jsx";
import Blog from "../../components/blog/structure/Blog.jsx";

export default function BlogPage() {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column' // 100% altura de la ventana
        }}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Titulo titulo={'Mi espacio'}></Titulo>
            <Blog></Blog>
            <ShoppingCart></ShoppingCart>
            <Footer></Footer>
        </Box>
    )
}