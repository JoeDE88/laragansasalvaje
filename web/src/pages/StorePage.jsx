import { Box, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/Appbar";

export default function StorePage (){
    return(
        <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Typography variant="h4" color='secondary' sx={{textAlign:'center',mb:4}}>Store</Typography>
        </>
    )
}