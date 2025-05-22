import { Box, Grid, Link, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function () {
    return (
        <Box sx={{ height: '100%', backgroundColor: 'blancoPerla.main', filter: 'brightness(90%)'}}>
            <Box justifyContent='center' sx={{ textAlign: 'center', marginTop: 3 }}>
                <Typography variant="h5">Contact me:</Typography>
            </Box>
            <Grid container spacing={0.5} sx={{ mt: 2.5, textAlign: 'center', m: 4 }}>
                <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                    <Box>
                        <Link href="https://www.instagram.com/laragansasalvaje?igsh=MW8zNGNpdG1tdDd3cA=="><InstagramIcon fontSize="large" color="tertiary"></InstagramIcon></Link>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                    <Box>
                        <Link href="mailto:lara.sanlop@gmail.com"><EmailIcon fontSize="large" color="tertiary"></EmailIcon></Link>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                    <Box>
                        <Link href="https://wa.me/34675426397"><WhatsAppIcon fontSize="large" color="tertiary"></WhatsAppIcon></Link>
                    </Box>
                </Grid>
            </Grid>
            <Box justifyContent='center' sx={{ textAlign: 'center' }}>
                <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                    © 2025 Lara Gansa Salvaje
                    <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                        <Link href="/politica-de-privacidad" underline="hover">
                            Política de Privacidad
                        </Link>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                        <Link href="/terminos-y-condiciones" underline="hover">
                            Términos y Condiciones
                        </Link>
                    </Grid>
                </Typography>
            </Box>
        </Box>
    )
}