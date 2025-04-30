import { Box } from "@mui/material";
import Titulo from "../../layout/Titulo";
import { useParams } from "react-router";

export default function(){
    let {titulo}= useParams()
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh', // 100% altura de la ventana
        }}>
            <Titulo titulo={titulo}></Titulo>
        </Box>
    )
}