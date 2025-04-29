
import BlogGrid from "../../components/blog/structure/BlogGrid.jsx";
import ResponsiveAppBar from "../../components/layout/Appbar.jsx";
import Footer from "../../components/layout/Footer.jsx";
import Titulo from "../../components/layout/Titulo.jsx";

export default function BlogPage() {

    return (
        <>
          <ResponsiveAppBar></ResponsiveAppBar>
            <Titulo titulo={'Blog'}></Titulo>
            <BlogGrid></BlogGrid>
            <Footer></Footer>
        </>
    )
}