
import { useContext, useEffect, useState } from "react"
import { deleteObra, getObras } from "../../../services/api/obras"
import Layout from "../../layout/Layout"
import { AdminContext } from "../../../context/AdminContext"
import Dashboard from "../Dashboard"
import DashboardCard from "../DashboardCard"

export default function DashboardObras() {
    const { token, refreshAccessToken } = useContext(AdminContext)
    const [obras, setObras] = useState([])

    useEffect(() => {
        getObras().then((data) => setObras(data))
    }, [])

    const handleDelete = (obraId) => {
        deleteObra(obraId, token, refreshAccessToken).then(() => {
            setObras((prevObras) => prevObras.filter((obra) => obra.id !== obraId));
        })
            .catch(err => {
                alert('Error al eliminar la obra')
            })
    }

    return (
        <>
            <Layout>
                <Dashboard
                    titulo={'Obras existentes'}
                    dashboardPath={'/dashboard/add-obra'}
                    textoBoton={'Nueva obra'}
                />
                {obras.map((obra) => {
                    return (
                        <DashboardCard
                            key={obra.id}
                            elemento={obra}
                            imagen={obra.imagen}
                            nombre={obra.nombre}
                            contenido={obra.descripcion}
                            handleClick={() => handleDelete(obra.id)}
                            editPath={`/obra/${obra.id}`} />
                    )
                })
                }
            </Layout>
        </>
    )
}