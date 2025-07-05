import { useContext, useEffect, useState } from "react"
import { deletePublicacion, getPublicaciones } from "../../../services/api/publicaciones"
import Layout from "../../layout/Layout"
import { AdminContext } from "../../../context/AdminContext"
import Dashboard from "../Dashboard"
import DashboardCard from "../DashboardCard"
import { baseURL } from "../../../services/api/api"

export default function DashboardPubs() {
    const { token, refreshAccessToken } = useContext(AdminContext)
    const [publicaciones, setPublicaciones] = useState([])

    useEffect(() => {
        getPublicaciones().then((data) => setPublicaciones(data))
    }, [])

    const handleDelete = (pubId) => {
        deletePublicacion(pubId, token, refreshAccessToken).then(() => {
            setPublicaciones((prevPublicaciones) =>
                prevPublicaciones.filter((pub) => pub.id !== pubId)
            );
        })
            .catch(err => {
                alert('Error al eliminar la obra')
            })
    }

    return (
        <>
            <Layout>
                <Dashboard
                    titulo={'Publicaciones existentes:'}
                    dashboardPath={'/dashboard/add-publicacion'}
                    textoBoton={'Nueva publicación'}
                />
                {publicaciones.map((pub) => {
                    return (
                        <DashboardCard
                            key={pub.id}
                            elemento={pub}
                            imagen={pub.imagen_destacada}
                            nombre={pub.titulo}
                            contenido={pub.contenido}
                            handleClick={handleDelete}
                            editPath={`/publicacion/${pub.id}`} />
                    )
                })}
            </Layout>
        </>
    )
}