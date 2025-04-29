import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { baseURL } from "../../../services/api/api";
import { Box, Container, Typography } from "@mui/material";
import Titulo from "../../layout/Titulo";

export default function () {
    const [articulo, setArticulo] = useState([])
    let { slug } = useParams()

    useEffect(() => {
        fetch(`${baseURL}blog/articulos/${slug}`)
            .then((response) => response.json())
            .then((data) => {
                setArticulo(data)
            })
    }, [])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh', // 100% altura de la ventana
        }}>
            <Titulo titulo={articulo.titulo}></Titulo>
            <Container maxWidth='lg'  sx={{ mb: 4 }}>
                <Typography>{articulo.contenido}</Typography>
            </Container>
            {articulo.imagen_destacada && (

                <Box sx={{
                    width: '100%',
                    height: '70%',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Box
                        component='img'
                        src={`${baseURL}${articulo.imagen_destacada}`}
                        sx={{
                            maxWidth: 'lg',
                            objectFit: 'contain'
                        }}
                    />
                </Box>
            )}
        </Box>
    )
}