import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import Titulo from "../../components/layout/Titulo";
import { NavLink } from "react-router";
import GreenButton from "../../components/layout/GreenButton";
import { dashboardRoutes } from "../../routes/routeDashboard";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import Layout from "../../components/layout/Layout";
import { addElementRoute } from "../../routes/addElementRoutes";

export default function DashBoardPage() {

    const { logout } = useContext(AdminContext)

    return (
        <>
            <Layout>
                <Titulo titulo={'Bienvenida Gansa'} />
                <Container>
                    <Grid container spacing={0}>
                        <Grid size={9}>
                            {dashboardRoutes.map((app) =>
                                <Box key={app.name}>
                                    <Card elevation={0}>
                                        <CardContent sx={{ backgroundColor: 'blancoPerla.main' }}>
                                            <Typography key={app.name} component={NavLink} to={app.path} sx={{ color: 'secondary.main', fontSize: 20 }}>
                                                {app.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <hr />
                                </Box>
                            )}
                        </Grid>
                        <Grid size={3}>
                            {addElementRoute.map((element) =>
                                <Card key={element.name} elevation={0}>
                                    <CardContent sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'blancoPerla.main', paddingTop: 3 }}>
                                        <GreenButton component={NavLink} to={element.path} sx={{ textDecoration: 'none' }} texto={`Agregar`}></GreenButton>
                                    </CardContent>
                                </Card>
                            )}
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <GreenButton texto={'Logout'} onClick={logout} />
                    </Box>
                </Container>
            </Layout>
        </>
    )
}