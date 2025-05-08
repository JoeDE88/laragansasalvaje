import { useEffect, useState } from "react";
import ResponsiveAppBar from "../../components/layout/Appbar";
import Footer from "../../components/layout/Footer";
import Titulo from "../../components/layout/Titulo";
import GalleryGrid from "../../components/obras/GalleryGrid";
import ShoppingCart from "../../components/store/ShoppingCart";
import { baseURL } from "../../services/api/api";

export default function GaleriaPage (){

    const [ obras, setObras] = useState([])

    useEffect(() =>{
        fetch(`${baseURL}galeria/primeras/`)
        .then((response) => response.json())
        .then((data) => {
            setObras(data)
        })
    },[])

    return(
        <>
        <ResponsiveAppBar/>
        <Titulo titulo={'Galeria'}></Titulo>
        <GalleryGrid obras={obras}></GalleryGrid>
        <ShoppingCart></ShoppingCart>
        <Footer></Footer>
        </>
    )
}