import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../context/AdminContext";
import { baseURL } from "../../../services/api/api";
import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import GreenButton from "../../layout/GreenButton";
import { useNavigate } from "react-router";
import Layout from "../../layout/Layout";

export default function AddEvento() {
    const { token } = useContext(AdminContext)

    const navigate = useNavigate()
    const [eventos, setEventos] = useState([])

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [imagen, setImagen] = useState("")


    function postNewEvento() {
        if (!imagen) {
            alert("Debes seleccionar una imagen.")
            return
        }

        const formData = new FormData()
        formData.append('nombre', nombre)
        formData.append('descripcion', descripcion)
        formData.append('imagen', imagen)

        fetch(`${baseURL}/eventos/nuevo-evento/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
            .then(res => {
                if (!res.ok) throw new Error('Error al crear el evento.')
                return res.json()
            })
            .then(data => {
                alert('Evento creada correctamente')
                navigate('/dashboard/lista-eventos')
            })
            .catch(err => {
                alert(err.message)
            })
    }

    return (
        <Layout>
            <Container>
                <Typography variant="h5">Añade nuevo evento:</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {
                                m: 1,
                                width: '50ch'
                            },
                            "& .MuiOutlinedInput-root": {
                                color: 'secondary.main',
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "secondary.main",
                                    borderWidth: "1px",
                                }, "&.Mui-focused": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "tertiary.main",
                                        borderWidth: "1px",
                                        color: 'tertiary.main'
                                    }
                                },
                            },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField
                            required
                            id="outlined-required"
                            label="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            color='tertiary'
                        />

                        <TextField
                            id="outlined-multiline-static"
                            label="Descripción"
                            multiline
                            rows={4}
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            color='tertiary'
                        />
                        <Box sx={{ padding: 1 }}>
                            <hr />
                            <Typography variant="h6">Multimedia</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2, marginBottom: 2 }}>

                                <Typography sx={{ marginRight: 2 }}>Selecciona la imagen:</Typography>
                                <input
                                    accept="image/*"
                                    type="file"
                                    onChange={(e) => setImagen(e.target.files[0])}
                                    color='tertiary'
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ marginTop: 2 }}>
                    <GreenButton texto={'Guardar'} onClick={postNewEvento}></GreenButton>
                </Box>
            </Container>
        </Layout>
    )
}