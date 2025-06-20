import { Box, Card, CardContent, Container, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { baseURL } from "../../../services/api/api"
import Layout from "../../layout/Layout"
import GreenButton from "../../layout/GreenButton"
import { NavLink } from "react-router"
import Placeholder from "../../../assets/utils/placeholder_150x103.5.png"
import DeleteIcon from '@mui/icons-material/Delete';

export default function ListaPublicaciones() {
    const [publicaciones, setPublicaciones] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/blog/publicaciones/`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                setPublicaciones(data)
            })
    }, [])

    return (
        <>
            <Layout>
                <Container>
                    <Typography variant="h5" sx={{ textAlign: 'center' }}>Publicaciones existentes:</Typography>
                    {publicaciones.map((publicacion) => {
                        return (
                            <Card key={publicacion.titulo} sx={{ margin: 'auto', width: { md: 750, xs: 500 }, mb: 1 }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex' }}>
                                        {publicacion.imagen_destacada ? <Box component='img' src={`${publicacion.imagen_destacada}`} sx={{ width: '150px', objectFit: 'cover' }} /> : <img src={Placeholder} alt="" />}
                                        <Stack direction={'column'} justifyContent={'space-between'}>
                                            <Stack direction={'row'} spacing={3}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    flexFlow: { xs: 'column', md: 'row' },
                                                    flexGrow:1,
                                                    justifyContent: { xs: 'top', md: 'space-between' },
                                                    px: 2
                                                }}>
                                                    <Typography>Titulo: {publicacion.titulo}</Typography>
                                                </Box>
                                                <Box>
                                                    <DeleteIcon></DeleteIcon>
                                                </Box>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </CardContent>
                            </Card>
                        )
                    })}
                    <Box component={NavLink} to={'/add-publicacion'} sx={{ display: 'flex', justifyContent: 'center', textDecoration: 'none' }}>
                        <GreenButton texto={'➕'}></GreenButton>
                    </Box>
                </Container>
            </Layout>
        </>
    )
}