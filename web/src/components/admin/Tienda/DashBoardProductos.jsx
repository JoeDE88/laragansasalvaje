import { useContext, useEffect, useState } from "react"
import Layout from "../../layout/Layout"
import { AdminContext } from "../../../context/AdminContext"
import Dashboard from "../Dashboard"
import DashboardCard from "../DashboardCard"
import { getProductos } from "../../../services/api/tienda"

export default function DashBoardProductos() {
    const { token } = useContext(AdminContext)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductos().then((data) => setProductos(data))
    }, [])

    const deleteElement = (productoId) => {
        fetch(`${baseURL}/shop/producto/${productoId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                if (!res.ok) throw new Error('Error al eliminar el producto.')
                return res.json()
            })
            .then((data) => {
                alert('Producto eliminado')
                setProductos((prevProductos) =>
                    prevProductos.filter((producto) => producto.id !== productoId)
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
                    titulo={'Productos existentes'}
                    dashboardPath={'/dashboard/add-producto'}
                    textoBoton={'Nuevo producto'}
                />
                {productos.map((producto) => {
                    return (
                        <DashboardCard
                            key={producto.id}
                            elemento={producto}
                            imagen={producto.imagen}
                            nombre={producto.nombre}
                            contenido={producto.descripcion}
                            precio={producto.precio}
                            euro={'€'}
                            handleClick={deleteElement}
                            editPath={`/producto/${producto.id}`} />
                    )
                })}
            </Layout>
        </>
    )
}