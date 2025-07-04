import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../context/AdminContext";
import { useNavigate, useParams } from "react-router";
import { baseURL, getProductoFromId } from "../../../services/api/api";
import Layout from "../../layout/Layout";
import { Box, Container, TextField, Typography } from "@mui/material";
import GreenButton from "../../layout/GreenButton";

export default function EditProducto() {

    const { token } = useContext(AdminContext)
    const { id } = useParams()

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState(0)
    const [stock, setStock] = useState(0)
    const [activo, setActivo] = useState(false)
    const [originalProducto, setOriginalProducto] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        getProductoFromId(`${id}`)
            .then((data) => {
                setOriginalProducto(data)
                setNombre(data.nombre || "")
                setDescripcion(data.descripcion || "")
                setPrecio(data.precio || 0)
                setStock(data.stock || 0)
                setActivo(data.activo || false)
            })
    }, [id])

    function editProducto() {
        const formData = new FormData();

        if (nombre !== originalProducto.nombre) {
            formData.append('nombre', nombre);
        }

        if (descripcion !== originalProducto.descripcion) {
            formData.append('descripcion', descripcion)
        }

        if (precio !== originalProducto.precio) {
            formData.append('precio', precio)
        }

        if (stock !== originalProducto.stock) {
            formData.append('stock', stock)
        }

        if (activo !== originalProducto) {
            formData.append('activo', activo)
        }

        fetch(`${baseURL}/shop/producto/${id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
            .then((res) => {
                if (!res.ok) throw new Error("Error al modificar producto.")
                return res.json()
            })
            .then((data) => {
                alert("Producto modificado correctamente.")
                navigate("/dashboard/lista-productos")
            })
            .catch(err => {
                alert(err.message)
            })
    }

    return (
        <Layout>
            <Container>
                <Typography variant="h5">Modifica producto:</Typography>
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
                            id="outlined-number"
                            label="Precio:"
                            type="number"
                            slotProps={{
                                htmlInput: {
                                    step: "0.01",
                                    min: 0.00
                                }
                            }}
                            placeholder="€"
                            value={precio}
                            onChange={(e) => setPrecio(parseFloat(e.target.value).toFixed(2))}
                            color='tertiary'
                        />
                        <TextField
                            id="outlined-number"
                            label="Stock:"
                            type="number"
                            slotProps={{
                                htmlInput: {
                                    min: 0
                                }
                            }}
                            placeholder="Stock"
                            value={stock}
                            onChange={(e) => setStock(parseInt(e.target.value))}
                            color='tertiary'
                        />
                    </Box>
                </Box>
                <Box sx={{ marginTop: 2 }}>
                    <GreenButton texto={'Modificar'} onClick={editProducto} />
                </Box>
            </Container>
        </Layout>
    )
}