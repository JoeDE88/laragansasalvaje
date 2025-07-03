import PublicacionCard from "../../components/blog/views/PublicacionCard";
import Layout from "../../components/layout/Layout";
import Titulo from "../../components/layout/Titulo";
import ShoppingCart from "../../components/store/ShoppingCart";

export default function PublicacionPage() {
    return (
        <>
            <Layout>
                <Titulo titulo={'Mi espacio'}/>
                <PublicacionCard></PublicacionCard>
                <ShoppingCart></ShoppingCart>
            </Layout>
        </>
    )
}