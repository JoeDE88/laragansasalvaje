import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from "@mui/material";

export default function BlogFirstItem({ titulo, texto, fecha }) {

    return (
        <>
            <Card elevation={0} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardActionArea sx={{ height: '100%' }}>
                    <CardContent sx={{ backgroundColor: 'blancoPerla.main', height: '100%' }}>
                        <Typography variant="h5" sx={{ color: 'blancoPerla.text' }}>{titulo}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mx: 2,mb:1  }}>
                            <Typography fontSize={'0.8rem'} color="blancoPerla.text">Etiqueta</Typography>
                            <Divider sx={{ height: '12px', mx: 2, borderColor: 'blancoPerla.text' }} orientation="vertical" variant="middle" flexItem />
                            <Typography fontSize={'0.8rem'} color="blancoPerla.text">{fecha}</Typography>
                        </Box>
                        <CardMedia
                            component='img'
                            sx={{
                                height: {
                                    xs: '250px',
                                    lg: '490px'
                                }
                            }}
                            image="https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_640.jpg"
                        />
                        <Box>
                            <Typography variant="h6" sx={{ p: 0.5 }}>
                                {
                                    texto.length > 220 ? texto.slice(0, 220) + '...' : texto
                                }
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}