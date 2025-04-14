import { Box, Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from "@mui/material";

export default function BlogFirstItem({ titulo, texto }) {
    return (
        <>
            <Card elevation={0} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardActionArea sx={{ height: '100%' }}>
                    <CardContent sx={{ backgroundColor: 'blancoPerla.main', height: '100%' }}>
                        <Typography variant="h5" sx={{ textAlign: 'left', color: 'blancoPerla.text', mb: 1 }}>{titulo}</Typography>
                        <Typography variant="p" color="blancoPerla.text" sx={{ p: 0.5 }}>Etiqueta</Typography>
                        <img className="blogimg" src="https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_640.jpg" />
                        <Typography variant="h6" sx={{ p: 1 }}>
                            {texto.length > 200 ? texto.slice(0, 200) + '...' : texto}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}