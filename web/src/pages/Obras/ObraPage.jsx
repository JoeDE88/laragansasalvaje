import Obra from "../../components/obras/view/Obra"
import ResponsiveAppBar from "../../components/layout/Appbar";
import Footer from "../../components/layout/Footer";
import ShoppingCart from "../../components/store/ShoppingCart";


export default function() {
    return (
        <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Obra></Obra>
        <ShoppingCart></ShoppingCart>
        <Footer></Footer>
        </>
    )
}