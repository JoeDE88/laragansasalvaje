import { useContext, useEffect, useState } from "react"
import { baseURL } from "../../../services/api/api"
import Layout from "../../layout/Layout"
import { AdminContext } from "../../../context/AdminContext"
import Dashboard from "../Dashboard"
import DashboardCard from "../DashboardCard"
import { useParams } from "react-router"

export default function DashboardEventos() {
    const { token } = useContext(AdminContext)
    const [eventos, setEventos] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`${baseURL}/eventos/lista-eventos/`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                
                setEventos(data)
            })
    }, [])

    const deleteElement = (eventoId) => {
        fetch(`${baseURL}/eventos/evento/${eventoId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                if (!res.ok) throw new Error('Error al eliminar el evento.')
                return res.json()
            })
            .then((data) => {
                alert('Evento eliminado')
                setEventos((prevEventos) =>
                    prevEventos.filter((evento) => evento.id !== eventoId)
                );
            })
            .catch(err => {
                alert(err.message)
            })
    }

    return (
        <>
            <Layout>
                <Dashboard
                titulo={'Eventos existentes'}
                dashboardPath={'/dashboard/add-evento'}
                textoBoton={'Nuevo evento'}
                elementos={eventos}
                onClick={deleteElement}
                imageKey={'imagen'}
                titleKey={'nombre'}
                contentKey={'descripcion'}
                />
                {eventos.map((evento)=>{
                    return(
                        <DashboardCard
                        key={evento.id}
                        elemento={evento}
                        imagen={evento.imagen}
                        nombre={evento.nombre}
                        contenido={evento.descripcion}
                        handleClick={deleteElement}
                        editPath={`/evento/${evento.id}`}
                        />
                    )
                })}
            </Layout>
        </>
    )
}