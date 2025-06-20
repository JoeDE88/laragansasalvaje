import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../context/AdminContext";
import { baseURL } from "../../../services/api/api";
import { Box, Container, MenuItem, TextField, Typography } from "@mui/material";
import GreenButton from "../../layout/GreenButton";
import Layout from "../../layout/Layout";
import { useNavigate } from "react-router";

const tipos = [
    {
        value: "articulo",
        label: "Articulo"
    },
    {
        value: "video",
        label: "Video"
    }
]

export default function AddPublicacion() {
    const { token } = useContext(AdminContext)

    const navigate = useNavigate()

    const [titulo, setTitulo] = useState("")
    const [tipo, setTipo] = useState("")
    const [etiqueta, setEtiqueta] = useState("")
    const [contenido, setContenido] = useState("")
    const [imagen, setImagen] = useState("")
    const [urlVideo, setUrlVideo] = useState("")
    const [archivoVideo, setArchivoVideo] = useState("")

    useEffect(() => {
        setImagen("")
        setUrlVideo("")
        setArchivoVideo("")
    }, [tipo])

    function postNewPublicacion() {
        let finalUrlVideo = urlVideo

        if (tipo === 'video' && archivoVideo && !urlVideo) {
            const cloudinaryUrl = `https://api.cloudinary.com/v1_1/donuuvr9q/video/upload`
            const formDataUpload = new FormData()
            formDataUpload.append('file', archivoVideo)
            formDataUpload.append('upload_preset', 'videos_unsigned')

            return fetch(cloudinaryUrl, {
                method: 'POST',
                body: formDataUpload
            })
                .then(res => {
                    if (!res.ok) throw new Error('Error al subir el video a Cloudinary')
                    return res.json()
                })
                .then(data => {
                    if (!data.secure_url) throw new Error('Error al subir video a cloudinary.')
                    finalUrlVideo = data.secure_url
                    console.log(finalUrlVideo);

                    enviarPublicacion(finalUrlVideo)
                })
                .catch(err => {
                    alert('Error al subir video: ' + err.message)
                })
        } else {
            enviarPublicacion(finalUrlVideo)
        }
    }

    function enviarPublicacion(finalUrlVideo) {

        if (tipo === 'video' && urlVideo && archivoVideo) {
            alert('No puedes subir un archivo y poner una URL al mismo tiempo.')
            return
        }

        if (tipo === 'video' && !urlVideo && !archivoVideo) {
            alert('Debes subir un archivo video o ingresar una URL.')
            return
        }

        const formData = new FormData()
        formData.append('titulo', titulo)
        formData.append('tipo', tipo)
        formData.append('contenido', contenido)
        formData.append('url_video', finalUrlVideo)
        formData.append('etiqueta', etiqueta)

        if (tipo === 'articulo') {
            if (imagen) {
                formData.append('imagen_destacada', imagen)
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
                if (!res.ok) throw new Error('Error al crear la publicación.')
                return res.json()
            })
            .then(data => {
                alert('Publicación creada correctamente')
                navigate('/lista-blog')
            })
            .catch(err => {
                alert(err.message)
            })
    }


    return (
        <Layout>
            <Container>
                <Typography variant="h5">Añade nueva publicación:</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
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
                            label="Titulo"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            color='tertiary'
                        />
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
                        <TextField
                            required
                            id="outlined-required"
                            label="Etiqueta"
                            value={etiqueta}
                            onChange={(e) => setEtiqueta(e.target.value)}
                            color='tertiary'
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Contenido"
                            multiline
                            rows={4}
                            value={contenido}
                            onChange={(e) => setContenido(e.target.value)}
                            color='tertiary'
                        />
                        <Box sx={{ padding: 1 }}>
                            <hr />
                            <Typography variant="h6">Multimedia</Typography>

                            {tipo === 'articulo' ? (<Typography variant="p">Agrega una imagen, si quieres:</Typography>) : (<Typography variant="p">Agrega un archivo de video o una URL de YouTube:</Typography>)}

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
                                    <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2, marginBottom: 2 }}>
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
                </Box>
                <Box sx={{ marginTop: 2 }}>
                    <GreenButton texto={'Guardar'} onClick={postNewPublicacion}></GreenButton>
                </Box>
            </Container>
        </Layout>
    )
}