import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardItem({ image, texto }) {
    return (
        <Card elevation={0}>
            <CardContent sx={{backgroundColor:'blancoPerla.main',p:0}}>
                <Typography variant="h5" sx={{ textAlign: 'center'}}>{texto}</Typography>
            </CardContent>
            <CardActionArea >
                <CardMedia
                    component="img"
                    image={image}
                />
            </CardActionArea>
        </Card>
    )
}