import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function BlogSmallItem({ titulo, texto }) {

    return (
        <Card elevation={0} sx={{ height: '33.33%' }}>
            <CardActionArea sx={{ height: '100%' }}>
                <CardContent sx={{ backgroundColor: 'blancoPerla.main', p: 0.5, height: '100%' }}>
                    <Typography variant='h6' sx={{ textAlign: 'left', color: 'blancoPerla.text' }}>{titulo}</Typography>
                    <img className="blogimg" src="https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_640.jpg" />
                    <Typography variant="p" sx={{ p: 0.5 }}>
                        {texto.length > 150 ? texto.slice(0, 150) + '...' : texto}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}