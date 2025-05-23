import PublicacionCard from "../../components/blog/views/PublicacionCard";
import Layout from "../../components/layout/Layout";
import ShoppingCart from "../../components/store/ShoppingCart";

export default function PublicacionPage() {
    return (
        <>
            <Layout>
                <PublicacionCard></PublicacionCard>
                <ShoppingCart></ShoppingCart>
            </Layout>
        </>
    )
}