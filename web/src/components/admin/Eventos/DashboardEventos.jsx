import { useContext, useEffect, useState } from "react"
import { deleteElement, getEventos } from "../../../services/api/eventos"
import Layout from "../../layout/Layout"
import Dashboard from "../Dashboard"
import DashboardCard from "../DashboardCard"
import { AdminContext } from "../../../context/AdminContext"

export default function DashboardEventos() {
    const {token,refreshAccessToken} = useContext(AdminContext)
    const [eventos, setEventos] = useState([])

    useEffect(() => {
        getEventos().then((data) => setEventos(data))
    }, [])

    const handleDelete = (eventoId) => {
        deleteElement(eventoId, token, refreshAccessToken).then(() => {
            setEventos((prevEventos) => prevEventos.filter((evento) => evento.id !== eventoId));
        })
            .catch(() =>
                alert('Error al eliminar el evento'))
    }

    return (
        <>
            <Layout>
                <Dashboard
                    titulo={'Eventos existentes'}
                    dashboardPath={'/dashboard/add-evento'}
                    textoBoton={'Nuevo evento'}
                />
                {eventos.map((evento) => {
                    return (
                        <DashboardCard
                            key={evento.id}
                            elemento={evento}
                            imagen={evento.imagen}
                            nombre={evento.nombre}
                            contenido={evento.descripcion}
                            handleClick={() => handleDelete(evento.id)}
                            editPath={`/evento/${evento.id}`}
                        />
                    )
                })}
            </Layout>
        </>
    )
}