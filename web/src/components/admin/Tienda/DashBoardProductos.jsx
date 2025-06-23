import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { baseURL } from "../../../services/api/api"
import Layout from "../../layout/Layout"
import GreenButton from "../../layout/GreenButton"
import { NavLink } from "react-router"
import Placeholder from "../../../assets/utils/placeholder_150x103.5.png"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdminContext } from "../../../context/AdminContext"

export default function DashboardProductos() {
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
                <Container>
                    <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>Productos existentes:</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', marginBottom: 2 }}>
                        <GreenButton component={NavLink} to={'/dashboard/add-producto'} texto={'Nuevo producto'}></GreenButton>
                    </Box>
                    {productos.map((producto) => {
                        return (
                            <Card key={producto.nombre} sx={{ margin: 'auto', width: { md: 750, xs: 500 }, mb: 1 }}>
                                <CardContent>
                                    <Grid container spacing={1} sx={{ display: 'flex' }}>
                                        <Grid size={3}>
                                            {producto.imagen ? <Box component='img' src={`${producto.imagen}`} sx={{ width: '150px', objectFit: 'cover' }} /> : <img src={Placeholder} alt="" />}
                                        </Grid>
                                        <Grid size={7}>
                                            <Typography sx={{ marginBottom: 1 }}>Nombre: {producto.nombre}</Typography>
                                            <Typography variant="p">Descripcion: {producto.descripcion}</Typography>
                                        </Grid>
                                        <Grid size={2}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                <EditIcon></EditIcon>
                                                <Box
                                                    onClick={() => deleteElement(producto.id)}
                                                    sx={{
                                                        cursor: 'pointer',
                                                        "&:hover": { color: 'red' }
                                                    }}>
                                                    <DeleteIcon></DeleteIcon>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        )
                    })}
                </Container>
            </Layout>
        </>
    )
}