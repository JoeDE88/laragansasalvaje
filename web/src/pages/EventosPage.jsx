import EventoCard from "../components/eventos/EventoCard";
import ResponsiveAppBar from "../components/layout/Appbar";
import Footer from "../components/layout/Footer";
import Titulo from "../components/layout/Titulo"
export default function EventosPage() {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Titulo titulo={'Eventos'}></Titulo>
            <EventoCard></EventoCard>
            <Footer></Footer>
        </>
    )
}