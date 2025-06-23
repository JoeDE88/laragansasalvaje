import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

import Placeholder from "../../assets/utils/placeholder_150x103.5.png"

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DashboardCard({ elemento, imageCard, tituloCard, contenidoCard,handleClick }) {

    return (
        <>
            <Card sx={{ margin: 'auto', width: { md: 750, xs: 500 }, mb: 1 }}>
                <CardContent>
                    <Grid container spacing={1} sx={{ display: 'flex' }}>
                        <Grid size={3}>
                            {elemento[imageCard] ? <Box component='img' src={`${elemento[imageCard]}`} sx={{ width: '150px', objectFit: 'cover' }} /> : <img src={Placeholder} alt="" />}
                        </Grid>
                        <Grid size={7}>
                            <Typography sx={{ marginBottom: 1 }}>{elemento[tituloCard]}</Typography>
                            <Typography variant="p">{elemento[contenidoCard]}</Typography>
                        </Grid>
                        <Grid size={2}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <EditIcon></EditIcon>
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
        </>
    )
}