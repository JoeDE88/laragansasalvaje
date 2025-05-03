import { Box, useMediaQuery, useTheme } from "@mui/material";
import ResponsiveAppBar from "../../components/layout/Appbar";
import ShoppingCart from "../../components/store/ShoppingCart";
import Footer from "../../components/layout/Footer";
import ProductsGallery from "../../components/store/ProductsGallery";
import Titulo from "../../components/layout/Titulo";

export default function ShopPage() {
    
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column' // 100% altura de la ventana
          }}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Titulo titulo={'Tienda'}></Titulo>
            <ProductsGallery></ProductsGallery>
            <ShoppingCart></ShoppingCart>
            <Footer></Footer>
        </Box>
    )
}