import { useContext, useEffect, useState } from "react"
import { baseURL } from "../../../services/api/api"
import Layout from "../../layout/Layout"
import { AdminContext } from "../../../context/AdminContext"
import Dashboard from "../Dashboard"
import DashboardCard from "../DashboardCard"

export default function DashboardPubs() {
    const { token } = useContext(AdminContext)
    const [publicaciones, setPublicaciones] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/blog/lista-publicaciones/`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPublicaciones(data)
            })
    }, [])

    const deleteElement = (pubId) => {
        fetch(`${baseURL}/blog/publicacion/${pubId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                if (!res.ok) throw new Error('Error al eliminar la publicación.')
                return res.json()
            })
            .then((data) => {
                alert('Publicacion eliminada')
                setPublicaciones((prevPublicaciones) =>
                    prevPublicaciones.filter((pub) => pub.id !== pubId)
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
                titulo={'Publicaciones existentes:'}
                path={'/dashboard/add-publicacion'}
                textoBoton={'Nueva publicación'}
                elementos={publicaciones}
                onClick={deleteElement}
                imageKey={'imagen_destacada'}
                titleKey={'titulo'}
                contentKey={'contenido'}
                />
                {publicaciones.map((pub)=>{
                    return(
                        <DashboardCard
                        key={pub.id}
                        elemento={pub}
                        imagen={pub.imagen_destacada}
                        nombre={pub.titulo}
                        contenido={pub.contenido}
                        handleClick={deleteElement}
                        editPath={`/publicacion/${pub.id}`}/>
                    )
                })}
            </Layout>
        </>
    )
}