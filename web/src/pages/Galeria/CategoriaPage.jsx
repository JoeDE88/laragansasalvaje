import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Titulo from "../../components/layout/Titulo";
import CategoriaGrid from "../../components/obras/structure/CategoriaGrid"
import ShoppingCart from "../../components/store/ShoppingCart";

import { baseURL } from "../../services/api/api";
import Layout from "../../components/layout/Layout";

export default function CategoriaPage() {
    let { slug } = useParams()

    const [obras, setObras] = useState([]);
    const [categoria, setCategoria] = useState('')

    useEffect(() => {
        fetch(`${baseURL}galeria/${slug}`)
            .then((response) => response.json())
            .then((data) => {
                setObras(data)
                setCategoria(data[0].categoria)
            })
    }, [])

    return (
        <>
            <Layout>
                <Titulo titulo={categoria}></Titulo>
                <CategoriaGrid obras={obras}></CategoriaGrid>
                <ShoppingCart></ShoppingCart>
            </Layout>
        </>
    )
}