import { Grid } from "@mui/material"
import ObrasItem from "./ObrasItem"
import { NavLink } from "react-router"
import { baseURL } from "../../services/api/api"


export default function Gallery({obras}) {
    
    return (
        <Grid container spacing={0.5} sx={{ margin: 5, padding: 5 }}>
            {obras.map((obra, index) => {
                return (
                    <Grid key={index} component={NavLink} to={`/obras/${obra.categoria_slug}`} size={{ xs: 12, md: 6, lg: 6 }} sx={{ mb: 3, textDecoration:'none' }}>
                        <ObrasItem image={`${baseURL}${obra.imagen}`} titulo={obra.categoria} color={'blancoPerla.main'}></ObrasItem>
                    </Grid>
                )
            })}
        </Grid>
    )
}