import { Typography } from "@mui/material";
import ResponsiveAppBar from "../components/layout/Appbar";
import Footer from "../components/layout/Footer";
import EventBanner from "../components/layout/EventBanner";
import Titulo from "../components/layout/Titulo";
import Gallery from "../components/obras/Gallery";
import ShoppingCart from "../components/store/ShoppingCart";

export default function () {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Titulo titulo={'LARA GANSA SALVAJE'}></Titulo>
            <EventBanner></EventBanner>
            <Gallery></Gallery>
            <ShoppingCart></ShoppingCart>
            <Footer></Footer>
        </>
    )
}