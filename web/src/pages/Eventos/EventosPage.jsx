import EventoCard from "../../components/eventos/EventoCard"
import Layout from "../../components/layout/Layout";
import Titulo from "../../components/layout/Titulo"
export default function EventosPage() {
    return (
        <>
            <Layout>
                <Titulo titulo={'Eventos'}></Titulo>
                <EventoCard/>
            </Layout>
        </>
    )
}