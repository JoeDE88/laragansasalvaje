import { Box, Grid, Icon, Link, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function () {
    return (
        <>
        <Box justifyContent='center' sx={{ textAlign:'center',mt:10}}>
            <Typography variant="h5">Contact me:</Typography>
        </Box>
            <Grid container spacing={0.5} sx={{mt:2.5, textAlign:'center'}}>
                <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                    <Box>
                        <Link href="https://www.instagram.com/laragansasalvaje?igsh=MW8zNGNpdG1tdDd3cA=="><InstagramIcon fontSize="large" color="secondary"></InstagramIcon></Link>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                    <Box>
                    <Link href="mailto:lara.sanlop@gmail.com"><EmailIcon fontSize="large" color="secondary"></EmailIcon></Link>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                    <Box>
                    <Link href="https://wa.me/34666302055"><WhatsAppIcon fontSize="large" color="secondary"></WhatsAppIcon></Link>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}