import { Box, Container} from "@mui/material";
import { useEffect, useState } from "react";
import { baseURL } from "../../../services/api/api";
import { NavLink } from "react-router";
import BlogCard from "../views/BlogCard";

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
                <>
                <Box key={pub.slug} component={NavLink} to={`/blog/publicaciones/${pub.slug}`} sx={{ textDecoration: "none" }}>
                <BlogCard publicacion={pub}></BlogCard>
                </Box>
                </>
            ))}
        </Container>
    );
}
