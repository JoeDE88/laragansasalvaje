
import PublicacionCard from "../../components/blog/views/PublicacionCard";
import ResponsiveAppBar from "../../components/layout/Appbar";
import Footer from "../../components/layout/Footer";
import ShoppingCart from "../../components/store/ShoppingCart";

export default function PublicacionPage() {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <PublicacionCard></PublicacionCard>
            <ShoppingCart></ShoppingCart>
            <Footer />
        </>
    )
}