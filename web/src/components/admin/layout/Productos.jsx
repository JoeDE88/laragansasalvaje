import { useContext, useEffect, useState } from "react"
import { AdminContext } from "../../../context/AdminContext"
import { baseURL } from "../../../services/api/api"
import { Box, Grid, TextField, Typography } from "@mui/material"
import GreenButton from "../../layout/GreenButton"

export default function Productos() {
    const { token } = useContext(AdminContext)
    const [productos, setProductos] = useState([])

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [stock, setStock] = useState("")
    const [imagen, setImagen] = useState("")

    useEffect(() => {
        fetch(`${baseURL}/shop/productos/`)
            .then((res) => res.json())
            .then((data) => setProductos(data))
    }, [])

    function postNewProducto() {
        const formData = new FormData()
        formData.append('nombre', nombre)
        formData.append('descripcion', descripcion)
        formData.append('precio', precio)
        formData.append('stock', stock)
        formData.append('imagen', imagen)

        fetch(`${baseURL}/shop/nuevo/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
            .then(res => {
                if (!res.ok) throw new Error('Error al crear nuevo producto.')
                return res.json()
            })
            .then(data => {
                alert('Producto creado correctamente.')
                setProductos([...productos, data])
            })
            .catch(err => {
                alert(err.message)
            })
    }


    return (
        <Box>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Typography variant="h5">Añade nuevo producto:</Typography>
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
                        </div>
                        <div>
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
                        <GreenButton texto={'Guardar'} onClick={postNewProducto}></GreenButton>
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Typography variant="h5">Productos existentes:</Typography>
                    <ul>
                        {productos.map((producto) => {
                            return (
                                <li>
                                    <Typography>{producto.nombre}</Typography>
                                </li>
                            )
                        })}
                    </ul>
                </Grid>
            </Grid>
        </Box>
    )
}