import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";

export default function GalleryCard({ image, titulo, color }) {
    return (
        <Card elevation={0}>
            <CardActionArea >
                <CardContent sx={{ backgroundColor: color, p: 0 }}>
                    <Box>
                        <Typography variant="h5" sx={{ textAlign: 'center', backgroundColor: 'blancoPerla.main' }}>{titulo}</Typography>
                    </Box>
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
                </CardContent>
            </CardActionArea>
        </Card>
    )
}