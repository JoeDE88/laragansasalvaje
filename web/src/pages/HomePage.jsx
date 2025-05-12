import ResponsiveAppBar from "../components/layout/Appbar";
import Footer from "../components/layout/Footer";
import Titulo from "../components/layout/Titulo";
import ShoppingCart from "../components/store/ShoppingCart";
import Carrusel from "../components/layout/Carrusel";

export default function () {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Titulo titulo={'LARA GANSA SALVAJE'}></Titulo>
            <Carrusel></Carrusel>
            <ShoppingCart></ShoppingCart>
            <Footer></Footer>
        </>
    )
}