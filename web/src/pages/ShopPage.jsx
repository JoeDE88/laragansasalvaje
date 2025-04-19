import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/Appbar";
import Gallery from "../components/obras/Gallery";
import ShoppingCart from "../components/store/ShoppingCart";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function ShopPage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Typography variant="h4" color='secondary' sx={{ textAlign: 'center', mb: 4 }}>Shop</Typography>
            <Gallery></Gallery>
            {windowWidth > 1200 ? 
            (
                <>
                <Footer></Footer>
                <ShoppingCart></ShoppingCart>
                </>
            ):
            (
                <>
                <ShoppingCart></ShoppingCart>
                <Footer></Footer>
                </>
            )}
        </>
    )
}