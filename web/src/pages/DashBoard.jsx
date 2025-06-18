import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import Titulo from "../components/layout/Titulo";
import { NavLink } from "react-router";
import GreenButton from "../components/layout/GreenButton";
import { dashboardRoutes } from "../routes/routeDashboard";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import Layout from "../components/layout/Layout";


export default function DashBoard() {

    const { logout } = useContext(AdminContext)

    return (
        <>
            <Layout>
                <Titulo titulo={'Bienvenida Gansa'} />
                <Container>
                    <Typography variant="h5">¿Qué quieres hacer hoy?</Typography>
                    {dashboardRoutes.map((app) =>
                        <>
                            <Card key={app.name} sx={{ margin: 1 }} elevation={0}>
                                <CardContent sx={{ backgroundColor: 'blancoPerla.main' }}>
                                    <Grid container spacing={2}>
                                        <Grid size={10}>
                                            <Typography component={NavLink} to={app.path} sx={{ color: 'secondary.main', fontSize: 20 }}>
                                                {app.name}
                                            </Typography>
                                        </Grid>
                                        <Grid size={2}>
                                            <GreenButton texto={'➕'} />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <hr />
                        </>
                    )}
                    <Box sx={{}}>
                        <GreenButton texto={'Logout'} onClick={logout} />
                    </Box>
                </Container>
            </Layout>
        </>
    )
}