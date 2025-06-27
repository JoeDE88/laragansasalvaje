import { useEffect, useState } from "react";
import Titulo from "../../components/layout/Titulo";
import GalleryGrid from "../../components/obras/structure/GalleryGrid";
import ShoppingCart from "../../components/store/ShoppingCart";
import { baseURL } from "../../services/api/api";
import Layout from "../../components/layout/Layout";
import { Box, Typography } from "@mui/material";

export default function GaleriaPage() {

    const [obras, setObras] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/galeria/primeras-obras-por-categoria/`)
            .then((response) => response.json())
            .then((data) => {
                setObras(data)
            })
    }, [])

    return (
        <>
            <Layout>
                <Titulo titulo={'Galeria'}></Titulo>
                {obras.length === 0 ? (
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
                    <GalleryGrid obras={obras}></GalleryGrid>
                )}
                <ShoppingCart></ShoppingCart>
            </Layout>
        </>
    )
}