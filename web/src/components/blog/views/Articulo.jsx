import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { baseURL } from "../../../services/api/api";
import { Box, Typography } from "@mui/material";

export default function () {
    const [articulo, setArticulo] = useState([])
    let { slug } = useParams()

    useEffect(() => {
        fetch(`${baseURL}blog/articulos/${slug}`)
            .then((response) => response.json())
            .then((data) => {
                setArticulo(data)})
    }, [])

    return (
        <>
        <Box>
            <Box
             component='img'
             src={`${baseURL}${articulo.imagen_destacada}`}
             width={'400px'}
             height={'500px'}
            />
        </Box>
            <Box>
                <Typography>{articulo.contenido}</Typography>
            </Box>
        </>
    )
}