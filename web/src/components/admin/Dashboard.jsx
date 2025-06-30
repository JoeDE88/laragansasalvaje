import { Box, Container} from "@mui/material";
import Titulo from "../layout/Titulo";
import GreenButton from "../layout/GreenButton";
import { NavLink } from "react-router";

export default function Dashboard({children, titulo, dashboardPath, textoBoton }) {
    return (
        <>
            <Container>
                <Titulo titulo={titulo} />
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', textDecoration: 'none', marginBottom: 2 }}>
                    <GreenButton component={NavLink} to={'/dashboard'} texto={'Dashboard'}></GreenButton>
                    <GreenButton component={NavLink} to={dashboardPath} texto={textoBoton}></GreenButton>
                </Box>
                {children}
            </Container>
        </>
    )
}