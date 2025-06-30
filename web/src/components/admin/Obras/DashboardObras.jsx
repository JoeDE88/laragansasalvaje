
import { useContext, useEffect, useState } from "react"
import { baseURL } from "../../../services/api/api"
import Layout from "../../layout/Layout"
import { AdminContext } from "../../../context/AdminContext"
import Dashboard from "../Dashboard"
import DashboardCard from "../DashboardCard"

export default function DashboardObras() {
    const { token } = useContext(AdminContext)
    const [obras, setObras] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/galeria/lista-obras/`)
            .then((res) => res.json())
            .then((data) => {
                setObras(data)
            })
    }, [])

    const deleteElement = (obraId) => {
        fetch(`${baseURL}/galeria/obra/${obraId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                if (!res.ok) throw new Error('Error al eliminar la obra.')
                return res.json()
            })
            .then((data) => {
                alert('Obra eliminada')
                setObras((prevObras) =>
                    prevObras.filter((obra) => obra.id !== obraId)
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
                    titulo={'Obras existentes'}
                    path={'/dashboard/add-obra'}
                    textoBoton={'Nueva obra'}
                    elementos={obras}
                    onClick={deleteElement}
                    imageKey={'imagen'}
                    titleKey={'nombre'}
                    contentKey={'descripcion'}
                    />
                    {obras.map((obra)=>{
                        return(
                            <DashboardCard
                            key={obra.id}
                            elemento={obra}
                            imagen={obra.imagen}
                            nombre={obra.nombre}
                            contenido={obra.descripcion}
                            handleClick={deleteElement}
                            editPath={`/obra/${obra.id}`}/>
                        )
                    })
                    }
            </Layout>
        </>
    )
}