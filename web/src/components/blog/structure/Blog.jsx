import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import BlogCard from "../views/BlogCard";
import getElements from "../../../services/api/getElements";

export default function Blog() {
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        getElements(`/blog/lista-publicaciones/`).then((pubs) =>setPublicaciones(pubs))
            .catch((error) => {
                console.error("Error al obtener las publicaciones:", error);
            });
    }, []);

    return (
        <>
            {
                publicaciones.length === 0 ? (
                    <Box
                        sx={{
                            height: "100vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                        }}
                    >
                        <Typography variant="h3">
                            La página se abrirá cuando el Gansismo surja.
                        </Typography>
                    </Box>
                ) : (
                    <Container sx={{ mt: 4 }}>
                        {publicaciones.map((pub) => (
                            <>
                                <Box key={pub.slug} component={NavLink} to={`/blog/publicaciones/${pub.slug}`} sx={{ textDecoration: "none" }}>
                                    <BlogCard publicacion={pub}></BlogCard>
                                </Box>
                            </>
                        ))}
                    </Container>
                )
            }
        </>
    );
}
