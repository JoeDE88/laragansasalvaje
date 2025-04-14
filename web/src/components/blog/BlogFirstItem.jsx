import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Paper, Typography } from "@mui/material";

export default function BlogFirstItem({ titulo, texto, fecha }) {
    return (
        <>
            <Card elevation={0} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardActionArea sx={{ height: '100%' }}>
                    <CardContent sx={{ backgroundColor: 'blancoPerla.main', height: '100%' }}>
                        <Box>
                            <Box>
                                <Typography variant="h5" sx={{ textAlign: 'left', color: 'blancoPerla.text' }}>{titulo}</Typography>
                            </Box>
                            <Box sx={{display: 'flex',alignItems: 'center',mx:2}}>
                                <Typography fontSize={'0.8rem'} color="blancoPerla.text">Etiqueta</Typography>
                                <Divider sx={{ height: '20px', mx: 2, borderColor: 'blancoPerla.text' }} orientation="vertical" variant="middle" flexItem />
                                <Typography fontSize={'0.8rem'} color="blancoPerla.text">{fecha}</Typography>
                            </Box>
                        </Box>
                        <img className="blogimg" src="https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_640.jpg" />
                        <Typography variant="h6" sx={{ p: 0.5 }}>
                            {texto.length > 200 ? texto.slice(0, 200) + '...' : texto}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}