import { Grid, ListItem, Typography } from "@mui/material"
import CardItem from "./CardItem"

const arr = [
    {"image": 'https://placehold.co/600x300/png'},
    {"image": 'https://placehold.co/600x300/png'},
    {"image": 'https://placehold.co/600x300/png'},
    {"image": 'https://placehold.co/600x300/png'},
    {"image": 'https://placehold.co/600x300/png'},
    {"image": 'https://placehold.co/600x300/png'},
    {"image": 'https://placehold.co/600x300/png'},
    {"image": 'https://placehold.co/600x300/png'},
    {"image": 'https://placehold.co/600x300/png'},
    {"image": 'https://placehold.co/600x300/png'},
    {"image": 'https://placehold.co/600x300/png'},
    {"image": 'https://placehold.co/600x300/png'},
]

export default function Gallery() {
    return (
        <Grid container spacing={0.5}>
            {arr.map((element, index) => {
                return (
                    <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                        <CardItem color={element.color} image={element.image}></CardItem>
                    </Grid>
                )
            })}
        </Grid>
    )
}