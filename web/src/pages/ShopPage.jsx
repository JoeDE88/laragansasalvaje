import { Typography, useMediaQuery, useTheme } from "@mui/material";
import ResponsiveAppBar from "../components/Appbar";
import ShoppingCart from "../components/store/ShoppingCart";
import Footer from "../components/Footer";
import ProductsGallery from "../components/store/ProductsGallery";

export default function ShopPage() {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'))
    
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Typography variant="h4" color='secondary' sx={{ textAlign: 'center', mb: 4 }}>Shop</Typography>
            <ProductsGallery></ProductsGallery>
            {isLargeScreen ?
                (
                    <>
                        <Footer></Footer>
                        <ShoppingCart></ShoppingCart>
                    </>
                ) :
                (
                    <>
                        <ShoppingCart></ShoppingCart>
                        <Footer></Footer>
                    </>
                )}
        </>
    )
}