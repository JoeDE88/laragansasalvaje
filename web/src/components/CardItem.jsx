import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

export default function CardItem({ color,image }) {
    return (
        <Card elevation={0} sx={{ backgroundColor: color, color: 'secondary.text' }}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    image={image}
                />
            </CardActionArea>
        </Card>
    )
}