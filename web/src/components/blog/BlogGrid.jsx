import { Box, Grid, Stack } from "@mui/material";
import BlogFirstItem from "./BlogFirstItem";
import BlogSmallItem from "./BlogSmallItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { baseURL } from "../../services/api/api";

export default function BlogGrid() {
    const [articulos, setArticulos] = useState([]);
    let { slug } = useParams();

    useEffect(() => {
        fetch(`${baseURL}blog/articulos/`)
            .then((response) => response.json())
            .then((data) => {
                setArticulos(data);
            })
            .catch((error) => {
                console.error("Error al obtener los artículos:", error);
            });
    }, []);

    const [primerArticulo, ...restoArticulos] = articulos;
    console.log(restoArticulos.imagen_destacada);

    return (
        <>
            <Box maxWidth={"lg"} sx={{ margin: "auto" }}>
                <Grid container spacing={3}>
                    {primerArticulo && (
                        <Grid key={primerArticulo.titulo} size={{ xs: 12, md: 12, lg: restoArticulos? 7 : 12 }} >
                            <BlogFirstItem
                                imagen={primerArticulo.imagen_destacada ? primerArticulo.imagen_destacada : 'https://placehold.co/600x300/png'}
                                titulo={primerArticulo.titulo}
                                texto={primerArticulo.contenido}
                                fecha={primerArticulo.creado_en}
                                etiqueta={primerArticulo.etiqueta}
                            ></BlogFirstItem>
                        </Grid>
                    )}
                    <Grid size={{ xs: 12, md: 12, lg: 5 }}>
                        <Stack spacing={2} height={"100%"}>
                            {restoArticulos && restoArticulos.map((blog, index) => {
                                return (
                                    <>
                                        <BlogSmallItem
                                            key={index}
                                            imagen={`${baseURL}${blog.imagen_destacada}`}
                                            bgColor={"secondary.main"}
                                            titulo={blog.titulo}
                                            texto={blog.contenido}
                                            fecha={blog.creado_en}
                                            etiqueta={blog.etiqueta}
                                        ></BlogSmallItem>
                                    </>
                                );
                            })}
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
