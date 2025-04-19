import { Grid } from "@mui/material"
import ShopItem from "./ShopItem"
import { NavLink, useParams } from "react-router"

const arr = [
    {
        "image": 'https://placehold.co/600x300/png',
        "nombre": 'PRODUCTO1',
        "precio": "32.00"
    },
    {
        "image": 'https://placehold.co/600x300/png',
        "nombre": 'Producto2',
        "precio": "32.00"
    },
    {
        "image": 'https://placehold.co/600x300/png',
        "nombre": 'Producto3',
        "precio": "32.00"
    },
    {
        "image": 'https://placehold.co/600x300/png',
        "nombre": 'Producto4',
        "precio": "32.00"
    },
    {
        "image": 'https://placehold.co/600x300/png',
        "nombre": 'Producto2',
        "precio": "32.00"
    },
    {
        "image": 'https://placehold.co/600x300/png',
        "nombre": 'Producto2',
        "precio": "32.00"
    },
]

export default function ProductsGallery() {
    let {name} = useParams()

    return (
        <Grid container spacing={1} sx={{ margin: 5, padding: 5 }}>
            {arr.map((element, index) => {
                return (
                    <Grid component={NavLink} to={`/shop/${element.nombre}`} key={index} size={{ xs: 12, md: 6, lg: 3 }} sx={{ mb: 4 }}>
                        <ShopItem image={element.image} nombre={element.nombre} precio={element.precio} color={'blancoPerla.main'}></ShopItem>
                    </Grid>
                )
            })}
        </Grid>
    )
}