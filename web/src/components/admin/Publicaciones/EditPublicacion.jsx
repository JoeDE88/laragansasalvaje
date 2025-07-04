import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../context/AdminContext";
import { useNavigate, useParams } from "react-router";
import { baseURL, getPublicacionFromId } from "../../../services/api/api";
import Layout from "../../layout/Layout";
import { Box, Container, TextField, Typography } from "@mui/material";
import GreenButton from "../../layout/GreenButton";

export default function EditPublicacion() {

    const { token } = useContext(AdminContext)
    const { id } = useParams()
    const navigate = useNavigate()

    const [titulo, setTitulo] = useState("")
    const [tipo, setTipo] = useState("")
    const [contenido, setContenido] = useState("")
    const [etiqueta, setEtiqueta] = useState("")
    const [urlVideo, setUrlVideo] = useState("")
    const [originalPub, setOriginalPub] = useState(null)

    useEffect(() => {
        getPublicacionFromId(`${id}`).then((data) => {
                setOriginalPub(data)
                setTitulo(data.titulo || "")
                setContenido(data.contenido || "")
                setEtiqueta(data.etiqueta || "")
                setUrlVideo(data.url_video || "")
            })
    }, [id])

    function editPublicacion() {

        const formData = new FormData()

        if (titulo !== originalPub.titulo) {
            formData.append('titulo', titulo);
        }
        if (contenido !== originalPub.contenido) {
            formData.append('contenido', contenido);
        }
        if (etiqueta !== originalPub.etiqueta) {
            formData.append('etiqueta', etiqueta);
        }
        if (urlVideo !== originalPub.urlVideo) {
            formData.append('url_video', urlVideo);
        }

        fetch(`${baseURL}/blog/publicacion/${id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
            .then((res) => {
                if (!res.ok) throw new Error('Error al modificar la publicacion.')
                return res.json()
            })
            .then(data => {
                alert("Publicación modificada correctamente");
                navigate('/dashboard/lista-blog')
            })
            .catch(err => {
                alert(err.message)
            })
    }

    return (
        <Layout>
            <Container>
                <Typography variant="h5">Modifica publicación:</Typography>
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
                            label="Titulo"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            color='tertiary'
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Contenido"
                            multiline
                            rows={10}
                            value={contenido}
                            onChange={(e) => setContenido(e.target.value)}
                            color='tertiary'
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Etiqueta"
                            value={etiqueta}
                            onChange={(e) => setEtiqueta(e.target.value)}
                            color='tertiary'
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="URL Video"
                            value={urlVideo}
                            onChange={(e) => setUrlVideo(e.target.value)}
                            color='tertiary'
                        />
                    </Box>
                </Box>
                <Box sx={{ marginTop: 2 }}>
                    <GreenButton texto={'Modificar'} onClick={editPublicacion}></GreenButton>
                </Box>
            </Container>
        </Layout>
    )
}