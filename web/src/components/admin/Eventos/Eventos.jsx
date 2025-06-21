import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../context/AdminContext";
import { baseURL } from "../../../services/api/api";
import { Box, Grid, TextField, Typography } from "@mui/material";
import GreenButton from "../../layout/GreenButton";

export default function Eventos() {
    const { token } = useContext(AdminContext)
    const [eventos, setEventos] = useState([])

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [imagen, setImagen] = useState("")

    useEffect(() => {
        fetch(`${baseURL}/eventos/lista-eventos/`)
            .then((res) => res.json())
            .then((data) => setEventos(data))
    }, [])

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
                setEventos([...eventos, data])
            })
            .catch(err => {
                alert(err.message)
            })
    }

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Typography variant="h5">Añade nuevo evento:</Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {
                                m: 1,
                                width: '25ch'
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
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                color='tertiary'
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-multiline-static"
                                label="Descripción"
                                multiline
                                rows={4}
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                color='tertiary'
                            />
                        </div>
                        <div>
                            <Typography>Selecciona la imagen:</Typography>
                            <input
                                accept="image/*"
                                type="file"
                                onChange={(e) => setImagen(e.target.files[0])}
                                color='tertiary'
                            />
                        </div>
                    </Box>
                    <Box sx={{ marginTop: 2 }}>
                        <GreenButton texto={'Guardar'} onClick={postNewEvento}></GreenButton>
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Typography variant="h5">Eventos existentes:</Typography>
                    <ul>
                        {eventos.map((evento) => {
                            return (
                                <li>
                                    <Typography>{evento.nombre}</Typography>
                                </li>
                            )
                        })}
                    </ul>
                </Grid>
            </Grid>
        </Box>
    )
}