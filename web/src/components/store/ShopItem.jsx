import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";

export default function ObrasItem({ image, nombre, color, precio }) {

    return (
        <Card elevation={0}>
            <CardActionArea>
                <Box
                    sx={{
                        width: '100%',
                        aspectRatio: '16 / 9',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Box
                        component='img'
                        src={image}
                        alt="imagen"
                        sx={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain'
                        }} />
                </Box>
                <CardContent sx={{ backgroundColor: color, p: 0, paddingTop: 1 }}>
                    <Typography sx={{ fontSize: 16 }}>{nombre}</Typography>
                    <Typography sx={{ fontSize: 14 }}>€ {precio}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}