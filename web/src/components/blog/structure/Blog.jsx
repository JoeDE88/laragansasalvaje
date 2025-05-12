import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { baseURL } from "../../../services/api/api";
import PublicacionCard from "./PublicacionCard";

export default function Blog() {
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}blog/publicaciones/`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                
                setPublicaciones(data);
            })
            .catch((error) => {
                console.error("Error al obtener los artículos:", error);
            });
    }, []);
    
    return (
        <Container sx={{mt:4}}>
            {publicaciones.map((pub)=>(
                <PublicacionCard key={pub.slug} publicacion={pub}></PublicacionCard>
            ))}
        </Container>
    );
}
