import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from "@mui/material";

export default function BlogSmallItem({ titulo, texto, fecha }) {

    return (
        <Card elevation={0} sx={{ height: '33.33%' }}>
            <CardActionArea sx={{ height: '100%' }}>
                <CardContent sx={{ backgroundColor: 'blancoPerla.main', p: 0.5, height: '100%' }}>
                    <Box>
                        <Box>
                            <Typography variant='h6' sx={{ textAlign: 'left', color: 'blancoPerla.text' }}>{titulo}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>
                            <Typography fontSize={'0.8rem'} color="blancoPerla.text">Etiqueta</Typography>
                            <Divider sx={{ height: '20px', mx: 2, borderColor: 'blancoPerla.text' }} orientation="vertical" variant="middle" flexItem />
                            <Typography fontSize={'0.8rem'} color="blancoPerla.text">{fecha}</Typography>
                        </Box>
                    </Box>
                    <img className="blogimg" src="https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_640.jpg" />
                    <Typography variant="p" sx={{ p: 0.5 }}>
                        {texto.length > 120 ? texto.slice(0, 120) + '...' : texto}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}