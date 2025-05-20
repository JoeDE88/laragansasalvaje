import { Grid } from "@mui/material"
import { NavLink } from "react-router"
import { baseURL } from "../../../services/api/api"
import GalleryCard from "../view/GalleryCard"

export default function GalleryGrid({ obras }) {

    return (
        <Grid container spacing={0.5} sx={{ margin: 5, padding: 5 }}>
            {obras.map((obra, index) => {
                return (
                    <Grid key={index} component={NavLink} to={`/obras/${obra.categoria_slug}`} size={{ xs: 12, md: 6, lg: 6 }} sx={{ mb: 3, textDecoration: 'none' }}>
                        <GalleryCard titulo={obra.nombre ? obra.nombre : obra.categoria} image={`${baseURL}${obra.imagen}`} color={'blancoPerla.main'}></GalleryCard>
                    </Grid>
                )
            })}
        </Grid>
    )
}