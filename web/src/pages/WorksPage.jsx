import { Typography } from "@mui/material";
import ResponsiveAppBar from "../components/Appbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function WorksPage (){
    return(
        <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Typography variant="h4" color='secondary' sx={{textAlign:'center',mb:4}}>Works</Typography>
        <Gallery></Gallery>
        <Footer></Footer>
        </>
    )
}