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

export default function DashboardObras() {
    const {token} = useContext(AdminContext)
    const [obras, setObras] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/galeria/obras/`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setObras(data)
            })
    }, [])

    const deleteElement = (obraId) => {
        fetch(`${baseURL}/galeria/obra/${obraId}`,{
            method:'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {if (!res.ok) throw new Error('Error al eliminar la obra.')
                return res.json()})
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
                <Container>
                    <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>Obras existentes:</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', marginBottom: 2  }}>
                        <GreenButton component={NavLink} to={'/dashboard/add-obra'} texto={'Nueva obra'}></GreenButton>
                    </Box>
                    {obras.map((obra) => {
                        return (
                            <Card key={obra.nombre} sx={{ margin: 'auto', width: { md: 750, xs: 500 }, mb: 1 }}>
                                <CardContent>
                                    <Grid container spacing={1} sx={{ display: 'flex' }}>
                                        <Grid size={3}>
                                            {obra.imagen ? <Box component='img' src={`${obra.imagen}`} sx={{ width: '150px', objectFit: 'cover' }} /> : <img src={Placeholder} alt="" />}
                                        </Grid>
                                        <Grid size={7}>
                                                <Typography sx={{marginBottom:1}}>Nombre: {obra.nombre}</Typography>
                                                <Typography variant="p">Descripción: {obra.descripcion}</Typography>
                                        </Grid>
                                        <Grid size={2}>
                                            <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
                                                <EditIcon></EditIcon>
                                                <Box onClick={()=>deleteElement(obra.id)}>
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