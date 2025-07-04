import { Box, Container, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { baseURL } from "../../../services/api/api";
import GreenButton from "../../layout/GreenButton";
import { AdminContext } from "../../../context/AdminContext";
import Layout from "../../layout/Layout";
import { useNavigate } from "react-router";

const fecha = new Date()
const año = fecha.getFullYear()

export default function AddObra() {
    const { token } = useContext(AdminContext);

    const navigate = useNavigate()

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [tecnica, setTecnica] = useState("");
    const [dimensiones, setDimensiones] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState(null);
    const [creadoEn, setCreadoEn] = useState(año);

    function postNewObra() {

        if (!imagen) {
            alert("Debes seleccionar una imagen.");
            return;
        }

        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('tecnica', tecnica);
        formData.append('dimensiones', dimensiones);
        formData.append('imagen', imagen);
        formData.append('categoria', categoria);
        formData.append('creado_en', creadoEn);

        fetch(`${baseURL}/galeria/nueva-obra/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
            .then(res => {
                if (!res.ok) throw new Error('Error al crear la obra');
                return res.json();
            })
            .then(data => {
                alert("Obra creada correctamente");
                navigate('/dashboard/lista-obras')
            })
            .catch(err => {
                alert(err.message);
            });
    }

    return (
        <Layout>
            <Container>
                <Typography variant="h5">Añade una nueva obra:</Typography>
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
                        <TextField
                            required
                            id="outlined-required"
                            label="Tecnica"
                            value={tecnica}
                            onChange={(e) => setTecnica(e.target.value)}
                            color='tertiary'
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Dimensiones"
                            value={dimensiones}
                            onChange={(e) => setDimensiones(e.target.value)}
                            color='tertiary'
                        />
                        <TextField
                            id="outlined-number"
                            label="Creado en:"
                            type="number"
                            slotProps={{
                                htmlInput: {
                                    max: año, min: 2000
                                }
                            }}
                            placeholder="AAAA"
                            value={creadoEn}
                            onChange={(e) => setCreadoEn(e.target.value)}
                            color='tertiary'
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Categoría"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
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
                    <GreenButton texto={'Guardar'} onClick={postNewObra}></GreenButton>
                </Box>
            </Container>
        </Layout>
    )
}