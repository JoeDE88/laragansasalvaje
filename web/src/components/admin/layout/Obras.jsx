import { Box, Grid, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { baseURL } from "../../../services/api/api";
import GreenButton from "../../layout/GreenButton";
import { AdminContext } from "../../../context/AdminContext";

const fecha = new Date()
const año = fecha.getFullYear()

export default function Obras() {
    const { token } = useContext(AdminContext);
    const [obras, setObras] = useState([])

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [tecnica, setTecnica] = useState("");
    const [dimensiones, setDimensiones] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState(null);
    const [creadoEn, setCreadoEn] = useState(año);

    useEffect(() => {
        fetch(`${baseURL}/galeria/obras/`)
            .then((res) => res.json())
            .then((data) => {
                setObras(data)
            })
    }, [])

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

        fetch(`${baseURL}/galeria/nueva/`, {
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
                setObras([...obras, data]);
            })
            .catch(err => {
                alert(err.message);
            });
    }

    return (
        <Box>
            <Typography variant="h5">Añade una nueva obra:</Typography>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
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
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Tecnica"
                                value={tecnica}
                                onChange={(e) => setTecnica(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Dimensiones"
                                value={dimensiones}
                                onChange={(e) => setDimensiones(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-number"
                                label="Creado en:"
                                type="number"
                                InputProps={{
                                    inputProps: {
                                        max: año, min: 2000
                                    }
                                }}
                                placeholder="AAAA"
                                value={creadoEn}
                                onChange={(e) => setCreadoEn(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Categoría"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                            />
                        </div>
                        <div>
                            <Typography>Selecciona la imagen:</Typography>
                            <input
                                accept="image/*"
                                type="file"
                                onChange={(e) => setImagen(e.target.files[0])}
                            />
                        </div>
                    </Box>
                    <GreenButton texto={'Guardar'} onClick={postNewObra}></GreenButton>
                </Grid>
                <Grid size={6}>
                    <Typography variant="h6">Obras existentes</Typography>
                    <ul>
                        {obras.map((obra) => {
                            return (
                                <li>
                                    <Typography>{obra.nombre}</Typography>
                                </li>
                            )
                        })}
                    </ul>
                </Grid>
            </Grid>
        </Box>
    )
}