
import ShoppingCart from "../../components/store/ShoppingCart";
import Titulo from "../../components/layout/Titulo";
import TiendaGrid from "../../components/store/structure/TiendaGrid";
import Layout from "../../components/layout/Layout";

export default function ShopPage() {

    return (
        <>
            <Layout>
                <Titulo titulo={'Tienda'}></Titulo>
                <TiendaGrid></TiendaGrid>
                <ShoppingCart></ShoppingCart>
            </Layout>
        </>
    )
}