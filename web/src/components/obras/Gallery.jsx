import { Grid } from "@mui/material"
import ObrasItem from "./ObrasItem"
import zeus from "../../assets/about/ejemplo_zeus.jpg"
import polución from "../../assets/about/polucion.jpg"
import { NavLink } from "react-router"

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
        <Grid container spacing={0.5} sx={{ margin: 5, padding: 5 }}>
            {arr.map((element, index) => {
                return (
                    <Grid key={index} component={NavLink} to={`/obras/${element.titulo}`} size={{ xs: 12, md: 6, lg: 6 }} sx={{ mb: 3, textDecoration:'none' }}>
                        <ObrasItem image={element.image} titulo={element.titulo} color={'blancoPerla.main'}></ObrasItem>
                    </Grid>
                )
            })}
        </Grid>
    )
}