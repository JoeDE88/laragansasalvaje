import { Typography } from "@mui/material";
import ResponsiveAppBar from "../components/Appbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function () {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Typography variant='h3' color='secondary' sx={{textAlign:'center',mb:5}}>
                Mundo Lara.
            </Typography>
            <Gallery></Gallery>
            <Footer></Footer>
        </>
    )
}