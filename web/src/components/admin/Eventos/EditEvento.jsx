import { Box, Container, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AdminContext } from "../../../context/AdminContext";
import { baseURL } from "../../../services/api/api";
import Layout from "../../layout/Layout";
import GreenButton from "../../layout/GreenButton";

export default function EditEvento(){

    const {token} = useContext(AdminContext)
    const {id} = useParams()

    const [nombre,setNombre] = useState("")
    const [descripcion,setDescripcion] = useState("")
    const [originalEvento,setOriginalEvento] = useState(null)

    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`${baseURL}/eventos/detalles-evento-id/${id}`)
        .then((res)=> res.json())
        .then((data)=>{
            setOriginalEvento(data)
            setNombre(data.nombre || "")
            setDescripcion(data.descripcion || "") 
        })
    },[id])

    function editEvento(){
        const formData = new FormData();

        if (nombre !== originalEvento.nombre){
            formData.append('nombre',nombre);
        }

        if (descripcion !== originalEvento.descripcion){
            formData.append('descripcion',descripcion)
        }

        fetch(`${baseURL}/eventos/evento/${id}`,{
            method:'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
        .then((res)=> {
            if (!res.ok) throw new Error ("Error al modificar el evento.")
                return res.json()
        })
        .then((data)=>{
            alert("Evento modificado correctamente.")
            navigate('/dashboard/lista-eventos')
        })
        .catch(err=>{
            alert(err.message)
        })
    }

    return (
        <Layout>
            <Container>
                <Typography variant="h5">Modifica evento:</Typography>
                <Box  sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                    component='form'
                    sx={{
                        '& .MuiTextField-root':{
                            m: 1,
                            width:'50ch'
                        },
                        "& .MuiOutlinedInput-root": {
                            color:'secondary.main',
                            "& .MuiOutlinedInput-notchedOutline":{
                                borderColor:'secondary.main',
                                borderWidth:'1px'
                            }, "&.Mui-focused":{
                                "& .MuiOutlinedInput-notchedOutline":{
                                    borderColor:'tertiary.main',
                                    borderWidth:'1px',
                                    color:'tertiary.main'
                                }
                            }
                        }
                    }}
                    noValidate
                    autoComplete="off">
                        <TextField
                        required
                        id='outlined-required'
                        label="Nombre"
                        value={nombre}
                        onChange={(e)=> setNombre(e.target.value)}
                        color="tertiary"
                        />
                        <TextField
                        required
                        id='outlined-multiline-static'
                        label="Descripcion"
                        multiline
                        rows={4}
                        value={descripcion}
                        onChange={(e)=> setDescripcion(e.target.value)}
                        color="tertiary"
                        />
                    </Box>
                </Box>
                <Box sx={{marginTop:2}}>
                    <GreenButton texto={'Modificar'} onClick={editEvento}/>
                </Box>
            </Container>
        </Layout>
    )
}