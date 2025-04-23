import { Grid } from "@mui/material"
import ShopItem from "./ShopItem"
import { NavLink, useParams } from "react-router"
import { baseURL } from "../../services/api/api"
import { useEffect, useState } from "react"

export default function ProductsGallery() {
    const [productos, setProductos] = useState([])
    let { slug } = useParams()

    useEffect(() => {
        fetch(`${baseURL}shop/productos/`)
            .then((data) => data.json())
            .then((response) => {
                setProductos(response)
            })
    }, [])

    return (
        <Grid container spacing={1} sx={{ margin: 5, padding: 5 }}>
            {productos.map((producto, index) => {
                return (
                    <Grid component={NavLink} to={`/shop/${producto.slug}`} key={index} size={{ xs: 12, md: 6, lg: 3 }} sx={{ mb: 4, textDecoration: 'none' }}>
                        <ShopItem image={`${baseURL}${producto.imagen}`} nombre={producto.nombre} precio={producto.precio} color={'blancoPerla.main'}></ShopItem>
                    </Grid>
                )
            })}
        </Grid>
    )
}