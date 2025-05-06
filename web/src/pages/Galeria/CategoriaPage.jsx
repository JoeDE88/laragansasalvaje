import { useParams } from "react-router";
import ResponsiveAppBar from "../../components/layout/Appbar";
import Titulo from "../../components/layout/Titulo";
import Gallery from "../../components/obras/Gallery";
import ShoppingCart from "../../components/store/ShoppingCart";
import Footer from "../../components/layout/Footer";
import { useEffect, useState } from "react";
import { baseURL } from "../../services/api/api";

export default function CategoriaPage (){
    let {slug} = useParams()

    const [obras, setObras] = useState([])
    
        useEffect(() => {
            fetch(`${baseURL}galeria/${slug}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setObras(data)})
        }, [])

    return (
        <>
        <ResponsiveAppBar/>
        <Titulo titulo={slug}></Titulo>
        <Gallery obras={obras}></Gallery>
        <ShoppingCart></ShoppingCart>
        <Footer></Footer>
        </>
    )
}