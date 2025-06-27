import { useContext, useState } from "react"
import { AdminContext } from "../../../context/AdminContext"
import { baseURL } from "../../../services/api/api"
import { Box, Container, TextField, Typography } from "@mui/material"
import GreenButton from "../../layout/GreenButton"
import Layout from "../../layout/Layout"
import { useNavigate } from "react-router"

export default function AddProd() {
    const { token } = useContext(AdminContext)

    const navigate = useNavigate()

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [stock, setStock] = useState("")
    const [imagen, setImagen] = useState("")

    function postNewProducto() {
        const formData = new FormData()
        formData.append('nombre', nombre)
        formData.append('descripcion', descripcion)
        formData.append('precio', precio)
        formData.append('stock', stock)
        formData.append('imagen', imagen)

        fetch(`${baseURL}/shop/nuevo-producto/`, {
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
                navigate('/dashboard/lista-productos')
            })
            .catch(err => {
                alert(err.message)
            })
    }


    return (
        <Layout>
            <Container>
                <Typography variant="h5">Añade nuevo producto:</Typography>
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
                    <GreenButton texto={'Guardar'} onClick={postNewProducto}></GreenButton>
                </Box>
            </Container>
        </Layout>
    )
}