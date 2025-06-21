import Titulo from "../../components/layout/Titulo";
import ShoppingCart from "../../components/store/ShoppingCart";
import Carrusel from "../../components/layout/Carrusel";
import Layout from "../../components/layout/Layout";

export default function () {
    return (
        <>
            <Layout>
            <Titulo titulo={'LARA GANSA SALVAJE'}></Titulo>
            <Carrusel></Carrusel>
            <ShoppingCart></ShoppingCart>
            </Layout>
        </>
    )
}