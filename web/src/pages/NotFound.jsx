import { Box, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/layout/Appbar";
import Footer from "../components/layout/Footer";

export default function NotFound (){
    return (
        <>
        <Box sx={{height:'78vh'}}>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Box sx={{display:'flex',margin:'auto',flexDirection:'column'}}>
        <Box sx={{display:'flex', justifyContent:'center', marginBottom:5, marginTop:5}}>
        <Typography variant="h4">404 - Página no encontrada</Typography>
        </Box>
        <Box sx={{display:'flex', justifyContent:'center'}}>
        <Typography variant="p">La ruta que estás buscando no existe.</Typography>
        </Box>
        </Box>
        </Box>
        <Footer></Footer>
        </>
    )
}