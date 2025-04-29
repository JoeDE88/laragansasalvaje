
import Articulo from "../../components/blog/views/Articulo";
import ResponsiveAppBar from "../../components/layout/Appbar";
import Footer from "../../components/layout/Footer";

export default function ArticuloPage() {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Articulo />
            <Footer />
        </>
    )
}