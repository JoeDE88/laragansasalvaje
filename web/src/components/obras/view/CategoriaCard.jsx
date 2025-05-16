import { Box, Card, CardActionArea, CardContent } from "@mui/material";

export default function CategoriaCard({ image }) {
    return (
        <Card elevation={0} sx={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <CardActionArea>
                <CardContent sx={{ backgroundColor: 'blancoPerla.main',p:0 }}>
                    <Box
                        sx={{
                            width: '100%',
                            maxHeight:'90vh',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Box
                            component='img'
                            src={image}
                            alt="imagen"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '80vh',
                                objectFit: 'contain'
                            }}>
                        </Box>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}