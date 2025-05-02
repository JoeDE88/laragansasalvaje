import ResponsiveAppBar from "../../components/layout/Appbar";
import Footer from "../../components/layout/Footer";
import Titulo from "../../components/layout/Titulo";
import Gallery from "../../components/obras/Gallery";

export default function WorksPage (){
    return(
        <>
        <ResponsiveAppBar/>
        <Titulo titulo={'Obras'}></Titulo>
        <Gallery></Gallery>
        <Footer></Footer>
        </>
    )
}