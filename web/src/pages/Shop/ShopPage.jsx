import { Box } from "@mui/material";
import ResponsiveAppBar from "../../components/layout/Appbar";
import ShoppingCart from "../../components/store/ShoppingCart";
import Footer from "../../components/layout/Footer";
import Titulo from "../../components/layout/Titulo";
import TiendaGrid from "../../components/store/structure/TiendaGrid";

export default function ShopPage() {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column' // 100% altura de la ventana
        }}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Titulo titulo={'Tienda'}></Titulo>
            <TiendaGrid></TiendaGrid>
            <ShoppingCart></ShoppingCart>
            <Footer></Footer>
        </Box>
    )
}