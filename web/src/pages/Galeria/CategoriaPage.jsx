import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ResponsiveAppBar from "../../components/layout/Appbar";
import Titulo from "../../components/layout/Titulo";
import CategoriaGrid from "../../components/obras/structure/CategoriaGrid"
import ShoppingCart from "../../components/store/ShoppingCart";
import Footer from "../../components/layout/Footer";

import { baseURL } from "../../services/api/api";

export default function CategoriaPage() {
    let { slug } = useParams()

    const [obras, setObras] = useState([]);
    const [ categoria, setCategoria] = useState('')

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
            <ResponsiveAppBar />
            <Titulo titulo={categoria}></Titulo>
            <CategoriaGrid obras={obras}></CategoriaGrid>
            <ShoppingCart></ShoppingCart>
            <Footer></Footer>
        </>
    )
}