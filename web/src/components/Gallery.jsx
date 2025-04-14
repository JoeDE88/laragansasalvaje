import { CardContent, CardHeader, Grid, ListItem, Typography } from "@mui/material"
import CardItem from "./CardItem"

const arr = [
    {
        "image": 'https://placehold.co/600x300/png',
        "titulo": 'Piel de Toro'
    },
    {
        "image": 'https://placehold.co/600x300/png',
        "titulo": 'Siglo XIX'
    },
    {
        "image": 'https://placehold.co/600x300/png',
        "titulo": 'Raper & Trapers'
    },
    {
        "image": 'https://placehold.co/600x300/png',
        "titulo": 'Mitología'
    },
]

export default function Gallery() {
    return (
        <Grid container spacing={0.5}>
            {arr.map((element, index) => {
                return (
                    <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                        <CardItem image={element.image} titulo={element.titulo} color={'blancoPerla.main'}></CardItem>
                    </Grid>
                )
            })}
        </Grid>
    )
}