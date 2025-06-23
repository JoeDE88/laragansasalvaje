import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import Titulo from "../layout/Titulo";
import GreenButton from "../layout/GreenButton";
import DashboardCard from "./DashboardCard"
import { NavLink } from "react-router";
import Placeholder from "../../assets/utils/placeholder_150x103.5.png"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Dashboard({ titulo, path, textoBoton, elementos, onClick, imageKey, titleKey,contentKey }) {
    return (
        <>
            <Container>
                <Titulo titulo={titulo} />
                <Box sx={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', marginBottom: 2 }}>
                    <GreenButton component={NavLink} to={path} texto={textoBoton}></GreenButton>
                </Box>
                {elementos.map((elemento) => {
                    return (
                        <DashboardCard
                        key={elemento.id}
                        elemento={elemento}
                        tituloCard={titleKey}
                        imageCard={imageKey}
                        contenidoCard={contentKey}
                        handleClick={onClick}
                        />
                    )
                })}
            </Container>
        </>
    )
}