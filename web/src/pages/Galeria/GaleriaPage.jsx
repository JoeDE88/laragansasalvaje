import { useEffect, useState } from "react";
import ResponsiveAppBar from "../../components/layout/Appbar";
import Footer from "../../components/layout/Footer";
import Titulo from "../../components/layout/Titulo";
import Gallery from "../../components/obras/Gallery";
import ShoppingCart from "../../components/store/ShoppingCart";
import { baseURL } from "../../services/api/api";

export default function GaleriaPage (){
    const [primerasObras, setPrimerasObras] = useState([])

    useEffect(() => {
        fetch(`${baseURL}galeria/primeras/`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPrimerasObras(data)})
    }, [])

    return(
        <>
        <ResponsiveAppBar/>
        <Titulo titulo={'Galeria'}></Titulo>
        <Gallery obras={primerasObras}></Gallery>
        <ShoppingCart></ShoppingCart>
        <Footer></Footer>
        </>
    )
}