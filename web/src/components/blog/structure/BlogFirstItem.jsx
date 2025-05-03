import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from "@mui/material";

export default function BlogFirstItem({ titulo, texto, fecha, imagen, etiqueta }) {

    return (
        <>
            <Card elevation={0} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardActionArea sx={{ height: '100%' }}>
                    <CardContent sx={{ backgroundColor: 'blancoPerla.main', height: '100%' }}>
                        <Typography variant="h5" sx={{ color: 'blancoPerla.text' }}>{titulo}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mx: 2,mb:1  }}>
                            <Typography fontSize={'0.8rem'} color="blancoPerla.text">{etiqueta}</Typography>
                            <Divider sx={{ height: '12px', mx: 2, borderColor: 'blancoPerla.text' }} orientation="vertical" variant="middle" flexItem />
                            <Typography fontSize={'0.8rem'} color="blancoPerla.text">{fecha}</Typography>
                        </Box>
                        <CardMedia
                            component='img'
                            sx={{
                                height: {
                                    xs: '250px',
                                    lg: '485px'
                                }
                            }}
                            image={imagen}
                        />
                        <Box>
                            <Typography variant="h6" sx={{ p: 0.5 }}>
                                {
                                    texto.length > 400 ? texto.slice(0, 400) + '...' : texto
                                }
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}