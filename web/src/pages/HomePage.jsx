import { Typography } from "@mui/material";
import ResponsiveAppBar from "../components/Appbar";
import Footer from "../components/Footer";
import EventBanner from "../components/EventBanner";

export default function () {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Typography variant='h4' color='secondary' sx={{textAlign:'center',mb:5}}>
                LARA GANSA SALVAJE
            </Typography>
            <EventBanner></EventBanner>
            <Footer></Footer>
        </>
    )
}