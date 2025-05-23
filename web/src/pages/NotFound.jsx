import { Box, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/layout/Appbar";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";

export default function NotFound (){
    return (
        <>
        <Layout>
        <Box sx={{display:'flex',margin:'auto',flexDirection:'column'}}>
        <Box sx={{display:'flex', justifyContent:'center', marginBottom:5, marginTop:5}}>
        <Typography variant="h4">404 - Página no encontrada</Typography>
        </Box>
        <Box sx={{display:'flex', justifyContent:'center'}}>
        <Typography variant="p">La ruta que estás buscando no existe.</Typography>
        </Box>
        </Box>
        </Layout>
        </>
    )
}