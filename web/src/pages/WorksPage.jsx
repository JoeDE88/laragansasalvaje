import ResponsiveAppBar from "../components/layout/Appbar";
import Gallery from "../components/obras/Gallery";
import Footer from "../components/layout/Footer";
import Titulo from "../components/layout/Titulo";

export default function WorksPage (){
    return(
        <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Titulo titulo={'Obras'}></Titulo>
        <Gallery></Gallery>
        <Footer></Footer>
        </>
    )
}