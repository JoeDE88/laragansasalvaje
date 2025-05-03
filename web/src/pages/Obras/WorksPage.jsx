import ResponsiveAppBar from "../../components/layout/Appbar";
import Footer from "../../components/layout/Footer";
import Titulo from "../../components/layout/Titulo";
import Gallery from "../../components/obras/Gallery";
import ShoppingCart from "../../components/store/ShoppingCart";

export default function WorksPage (){
    return(
        <>
        <ResponsiveAppBar/>
        <Titulo titulo={'Obras'}></Titulo>
        <Gallery></Gallery>
        <ShoppingCart></ShoppingCart>
        <Footer></Footer>
        </>
    )
}