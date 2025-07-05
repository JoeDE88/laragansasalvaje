import { useContext, useEffect, useState } from "react"
import Layout from "../../layout/Layout"
import { AdminContext } from "../../../context/AdminContext"
import Dashboard from "../Dashboard"
import DashboardCard from "../DashboardCard"
import { deleteProducto, getProductos } from "../../../services/api/tienda"

export default function DashBoardProductos() {
    const { token, refreshAccessToken } = useContext(AdminContext)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductos().then((data) => setProductos(data))
    }, [])

    const handleDelete = (productoId) => {
        deleteProducto(productoId, token, refreshAccessToken).then(() => {
            setProductos((prevProductos) =>
                prevProductos.filter((producto) => producto.id !== productoId)
            )
        })
            .catch(err => {
                alert('Error al eliminar el producto.')
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
                            handleClick={handleDelete}
                            editPath={`/producto/${producto.id}`} />
                    )
                })}
            </Layout>
        </>
    )
}