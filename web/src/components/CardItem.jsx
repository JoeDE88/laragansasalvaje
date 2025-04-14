import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardItem({ image, titulo, color,texto }) {
    return (
        <Card elevation={0}>
            <CardContent sx={{ backgroundColor: color, p: 0 }}>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>{titulo}</Typography>
            </CardContent>
            <CardActionArea >
                <CardMedia
                    component="img"
                    image={image}
                />
                <Typography>{texto}</Typography>
            </CardActionArea>
        </Card>
    )
}