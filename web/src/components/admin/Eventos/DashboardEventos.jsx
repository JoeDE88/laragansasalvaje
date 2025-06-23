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

export default function DashboardEventos() {
    const { token } = useContext(AdminContext)
    const [eventos, setEventos] = useState([])

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
                <Container>
                    <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>Eventos existentes:</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', marginBottom: 2 }}>
                        <GreenButton component={NavLink} to={'/dashboard/add-evento'} texto={'Nuevo evento'}></GreenButton>
                    </Box>
                    {eventos.map((evento) => {
                        return (
                            <Card key={evento.titulo} sx={{ margin: 'auto', width: { md: 750, xs: 500 }, mb: 1 }}>
                                <CardContent>
                                    <Grid container spacing={1} sx={{ display: 'flex' }}>
                                        <Grid size={3}>
                                            {evento.imagen ? <Box component='img' src={`${evento.imagen}`} sx={{ width: '150px', objectFit: 'cover' }} /> : <img src={Placeholder} alt="" />}
                                        </Grid>
                                        <Grid size={7}>
                                            <Typography sx={{ marginBottom: 1 }}>Titulo: {evento.nombre}</Typography>
                                            <Typography variant="p">Texto: {evento.descripcion}</Typography>
                                        </Grid>
                                        <Grid size={2}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                <EditIcon></EditIcon>
                                                <Box
                                                    onClick={() => deleteElement(evento.id)}
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