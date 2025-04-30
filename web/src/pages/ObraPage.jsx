import { Typography } from "@mui/material";
import ResponsiveAppBar from "../components/layout/Appbar";
import Footer from "../components/layout/Footer";
import Obra from "../components/obras/view/Obra";

export default function() {
    return (
        <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Obra></Obra>
        <Footer></Footer>
        </>
    )
}