import { Grid } from "@mui/material"
import CardItem from "./CardItem"
import zeus from "../../assets/about/ejemplo_zeus.jpg"
import polución from "../../assets/about/polucion.jpg"

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
        "image": polución,
        "titulo": 'Raper & Trapers'
    },
    {
        "image": zeus,
        "titulo": 'Mitología'
    },
]

export default function Gallery() {
    return (
        <Grid container spacing={0.5} sx={{margin:3, padding:3}}>
            {arr.map((element, index) => {
                return (
                    <Grid key={index} size={{ xs: 12, md: 6, lg:6 }} sx={{mb:3}}>
                        <CardItem image={element.image} titulo={element.titulo} color={'blancoPerla.main'}></CardItem>
                    </Grid>
                )
            })}
        </Grid>
    )
}