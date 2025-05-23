import { useEffect, useState } from "react";
import Titulo from "../../components/layout/Titulo";
import GalleryGrid from "../../components/obras/structure/GalleryGrid";
import ShoppingCart from "../../components/store/ShoppingCart";
import { baseURL } from "../../services/api/api";
import Layout from "../../components/layout/Layout";

export default function GaleriaPage() {

    const [obras, setObras] = useState([])

    useEffect(() => {
        fetch(`${baseURL}galeria/primeras/`)
            .then((response) => response.json())
            .then((data) => {
                setObras(data)
            })
    }, [])

    return (
        <>
            <Layout>
                <Titulo titulo={'Galeria'}></Titulo>
                <GalleryGrid obras={obras}></GalleryGrid>
                <ShoppingCart></ShoppingCart>
            </Layout>
        </>
    )
}