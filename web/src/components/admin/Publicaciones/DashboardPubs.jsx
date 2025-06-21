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

export default function DashboardPubs() {
    const {token} = useContext(AdminContext)
    const [publicaciones, setPublicaciones] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/blog/publicaciones/`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPublicaciones(data)
            })
    }, [])

    const deleteElement = (pubId) => {
        fetch(`${baseURL}/blog/publicacion/${pubId}`,{
            method:'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {if (!res.ok) throw new Error('Error al eliminar la publicación.')
                return res.json()})
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
                <Container>
                    <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>Publicaciones existentes:</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', marginBottom: 2  }}>
                        <GreenButton component={NavLink} to={'/dashboard/add-publicacion'} texto={'Nueva publicación'}></GreenButton>
                    </Box>
                    {publicaciones.map((publicacion) => {
                        return (
                            <Card key={publicacion.titulo} sx={{ margin: 'auto', width: { md: 750, xs: 500 }, mb: 1 }}>
                                <CardContent>
                                    <Grid container spacing={1} sx={{ display: 'flex' }}>
                                        <Grid size={3}>
                                            {publicacion.imagen_destacada ? <Box component='img' src={`${publicacion.imagen_destacada}`} sx={{ width: '150px', objectFit: 'cover' }} /> : <img src={Placeholder} alt="" />}
                                        </Grid>
                                        <Grid size={7}>
                                                <Typography sx={{marginBottom:1}}>Titulo: {publicacion.titulo}</Typography>
                                                <Typography variant="p">Texto: {publicacion.contenido}</Typography>
                                        </Grid>
                                        <Grid size={2}>
                                            <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
                                                <EditIcon></EditIcon>
                                                <Box onClick={()=>deleteElement(publicacion.id)}>
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