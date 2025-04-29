import { Typography } from "@mui/material";
import ResponsiveAppBar from "../components/layout/Appbar";
import Footer from "../components/layout/Footer";
import EventBanner from "../components/layout/EventBanner";
import Titulo from "../components/layout/Titulo";

export default function () {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Titulo titulo={'LARA GANSA SALVAJE'}></Titulo>
            <EventBanner></EventBanner>
            <Footer></Footer>
        </>
    )
}