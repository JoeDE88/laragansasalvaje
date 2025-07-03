import { Box, Card, CardContent, Container, Grid, Tooltip, Typography } from "@mui/material";

import Placeholder from "../../assets/utils/placeholder_150x103.5.png"

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router";

export default function DashboardCard({ elemento, imagen, nombre, contenido, handleClick, editPath, precio, euro }) {

    return (
        <>
            <Container>

                <Card sx={{ margin: 'auto', mb: 1 }}>
                    <CardContent>
                        <Grid container spacing={1} sx={{ display: 'flex' }}>
                            <Grid size={{ xs: 4, lg: 3 }}>
                                {imagen ? <Box component='img' src={`${imagen}`} sx={{ width: '100%', objectFit: 'contain' }} /> : <img src={Placeholder} alt="" style={{ width: '100%', objectFit: 'contain' }} />}
                            </Grid>
                            <Grid size={{ xs: 4, lg: 7 }}>
                                <Typography sx={{ marginBottom: 1 }}>{nombre}</Typography>
                                <Typography variant="p">{contenido}</Typography>
                                <Typography>{precio} {euro}</Typography>
                            </Grid>
                            <Grid size={{ xs: 4, lg: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <Box
                                        component={NavLink}
                                        to={editPath}
                                        sx={{
                                            cursor: 'pointer',
                                            "&:hover": { color: '#4392F1' }
                                        }}>
                                        <Tooltip title='Edit'>
                                            <EditIcon></EditIcon>
                                        </Tooltip>
                                    </Box>
                                    <Box
                                        onClick={() => handleClick(elemento.id)}
                                        sx={{
                                            cursor: 'pointer',
                                            "&:hover": { color: 'red' }
                                        }}>
                                        <DeleteIcon></DeleteIcon>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}