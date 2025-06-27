import { useContext, useEffect, useState } from "react"
import { baseURL } from "../../../services/api/api"
import Layout from "../../layout/Layout"
import { AdminContext } from "../../../context/AdminContext"
import Dashboard from "../Dashboard"

export default function DashBoardProductos() {
    const { token } = useContext(AdminContext)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/shop/lista-productos/`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProductos(data)
            })
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
                path={'/dashboard/add-producto'}
                textoBoton={'Nuevo producto'}
                elementos={productos}
                onClick={deleteElement}
                imageKey={'imagen'}
                titleKey={'nombre'}
                contentKey={'descripcion'}/>
            </Layout>
        </>
    )
}