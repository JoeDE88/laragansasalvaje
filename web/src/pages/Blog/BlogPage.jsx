import Titulo from "../../components/layout/Titulo.jsx";
import ShoppingCart from "../../components/store/ShoppingCart.jsx";
import Blog from "../../components/blog/structure/Blog.jsx";
import Layout from "../../components/layout/Layout.jsx";

export default function BlogPage() {

    return (
        <>
            <Layout>
                <Titulo titulo={'Mi espacio'}></Titulo>
                <Blog></Blog>
                <ShoppingCart></ShoppingCart>
            </Layout>
        </>
    )
}