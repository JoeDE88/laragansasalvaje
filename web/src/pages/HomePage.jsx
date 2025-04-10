import { Typography } from "@mui/material";
import ResponsiveAppBar from "../components/Appbar";
import Gallery from "../components/Gallery";

export default function () {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Typography variant='h2' color='secondary'>
                Mundo Lara.
            </Typography>
            <Gallery></Gallery>
        </>
    )
}