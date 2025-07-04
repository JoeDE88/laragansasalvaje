import { Box, Container, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { getObraFromId } from "../../../services/api/obras";
import GreenButton from "../../layout/GreenButton";
import { AdminContext } from "../../../context/AdminContext";
import Layout from "../../layout/Layout";
import { useNavigate, useParams } from "react-router";

const fecha = new Date()
const año = fecha.getFullYear()

export default function EditObra() {

    const { id } = useParams()
    const { token } = useContext(AdminContext);
    const navigate = useNavigate()

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [tecnica, setTecnica] = useState("");
    const [dimensiones, setDimensiones] = useState("");
    const [categoria, setCategoria] = useState("");
    const [creadoEn, setCreadoEn] = useState(año);
    const [originalObra, setOriginalObra] = useState(null)

    useEffect(() => {
        getObraFromId(`${id}`).then((data) => {
                setOriginalObra(data)
                setNombre(data.nombre || "")
                setDescripcion(data.descripcion || "")
                setTecnica(data.tecnica || "")
                setDimensiones(data.dimensiones || "")
                setCategoria(data.categoria || "")
                setCreadoEn(data.creadoEn || "")
            })
    }, [id])

    function editObra() {

        const formData = new FormData();

        if (nombre !== originalObra.nombre) {
            formData.append('nombre', nombre);
        }
        if (descripcion !== originalObra.descripcion) {
            formData.append('descripcion', descripcion);
        }
        if (tecnica !== originalObra.tecnica) {
            formData.append('tecnica', tecnica);
        }
        if (dimensiones !== originalObra.dimensiones) {
            formData.append('dimensiones', dimensiones);
        }
        
        if (categoria !== originalObra.categoria) {
            formData.append('categoria', categoria);
        }
        if (creadoEn !== originalObra.creadoEn) {
            formData.append('creado_en', creadoEn);
        }

        fetch(`${baseURL}/galeria/obra/${id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
            .then(res => {
                if (!res.ok) throw new Error('Error al modificar la obra');
                return res.json();
            })
            .then(data => {
                alert("Obra modificada correctamente");
                navigate('/dashboard/lista-obras')
            })
            .catch(err => {
                alert(err.message);
            });
    }

    return (
        <Layout>
            <Container>
                <Typography variant="h5">Modifica obra:</Typography>
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
                    </Box>
                </Box>
                <Box sx={{ marginTop: 2 }}>
                    <GreenButton texto={'Modificar'} onClick={editObra}></GreenButton>
                </Box>
            </Container>
        </Layout>
    )
}