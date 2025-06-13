import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../context/AdminContext";
import { baseURL } from "../../../services/api/api";
import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";
import GreenButton from "../../layout/GreenButton";

const tipos = [
    {
        value: "articulo",
        label: "Articulo"
    },
    {
        value: "imagen",
        label: "Imagen"
    },
    {
        value: "video",
        label: "Video"
    }
]

export default function Publicaciones() {
    const { token } = useContext(AdminContext)
    const [eventos, setEventos] = useState([])

    const [titulo, setTitulo] = useState("")
    const [tipo, setTipo] = useState("")
    const [etiqueta, setEtiqueta] = useState("")
    const [contenido, setContenido] = useState("")
    const [imagen, setImagen] = useState("")
    const [urlVideo, setUrlVideo] = useState("")
    const [archivoVideo, setArchivoVideo] = useState("")

    useEffect(() => {
        fetch(`${baseURL}/blog/publicaciones/`)
            .then((res) => res.json())
            .then((data) => setEventos(data))
    }, [])

    useEffect(()=> {
        setImagen("")
        setUrlVideo("")
        setArchivoVideo("")
    },[tipo])

    function postNewPublicacion() {

        if (tipo === 'video' && urlVideo && archivoVideo){
            alert('No puedes subir un archivo y poner una URL al mismo tiempo.')
            return
        }

        if (tipo === 'video' && !urlVideo && !archivoVideo){
            alert('Debes subir un archivo video o ingresar una URL.')
            return
        }

        const formData = new FormData()
        formData.append('titulo', titulo)
        formData.append('tipo', tipo)
        formData.append('contenido', contenido)
        formData.append('url_video', urlVideo)
        formData.append('imagen_destacada', imagen)
        formData.append('etiqueta', etiqueta)
        formData.append('archivo_video', archivoVideo)

        if (tipo === 'articulo'){
            if (imagen){
                formData.append('imagen_destacada',imagen)
            }
        }

        if (tipo === 'video'){
            if (archivoVideo) {
                formData.append('archivo_video', archivoVideo)
            }
            if (urlVideo){
                formData.append('url_video', urlVideo)
            }
        }

        fetch(`${baseURL}/blog/nueva/`, {
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
                    <Typography variant="h5">Añade nueva publicación:</Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {
                                m: 1,
                                width: '30ch'
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
                                label="Titulo"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                color='tertiary'
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="outlined-select-currency"
                                select
                                label="Tipo"
                                value={tipo}
                                onChange={(e) => setTipo(e.target.value)}
                                color='tertiary'
                            >
                                {tipos.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Etiqueta"
                                value={etiqueta}
                                onChange={(e) => setEtiqueta(e.target.value)}
                                color='tertiary'
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-multiline-static"
                                label="Contenido"
                                multiline
                                rows={4}
                                value={contenido}
                                onChange={(e) => setContenido(e.target.value)}
                                color='tertiary'
                            />
                        </div>
                        <Box sx={{ padding: 1 }}>
                            <hr />
                            <Typography variant="h6">Multimedia</Typography>
                            <Typography variant="p">Agrega una imagen, un archivo de video o una URL de YouTube:</Typography>

                            {tipo === 'articulo' ? (<Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2, marginBottom: 2 }}>
                                <Typography sx={{ marginRight: 2 }}>Imagen:</Typography>
                                <input
                                    accept="image/*"
                                    type="file"
                                    onChange={(e) => setImagen(e.target.files[0])}
                                    color='tertiary'
                                />
                            </Box>
                            ) : null}

                            {tipo === 'video' ? (
                                <>
                                <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: 2 }}>
                                    <Typography sx={{ marginRight: 4 }}>Video:</Typography>
                                    <input
                                        accept="media_type"
                                        type="file"
                                        onChange={(e) => setArchivoVideo(e.target.files[0])}
                                        color='tertiary'
                                    />
                                </Box>
                                <Box sx={{ marginBottom: 2 }}>
                                    <Typography>Url Video:</Typography>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="URL Video"
                                        value={urlVideo}
                                        onChange={(e) => setUrlVideo(e.target.value)}
                                        color='tertiary'
                                    />
                                    <hr />
                                </Box>
                            </>
                        ) : null}
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: 2 }}>
                        <GreenButton texto={'Guardar'} onClick={postNewPublicacion}></GreenButton>
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Typography variant="h5">Publicaciones existentes:</Typography>
                    <ul>
                        {eventos.map((eventos) => {
                            return (
                                <li>
                                    <Typography>{eventos.nombre}</Typography>
                                </li>
                            )
                        })}
                    </ul>
                </Grid>
            </Grid>
        </Box>
    )
}