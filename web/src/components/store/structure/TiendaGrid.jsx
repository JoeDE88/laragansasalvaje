import { Grid } from "@mui/material";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import TiendaCard from "../view/TiendaCard";
import {getProductos} from "../../../services/api/tienda";

export default function TiendaGrid() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos().then((productos) =>setProductos(productos))
        .catch((error) => {
                console.error("Error al obtener los productos:", error);
            })
    }, []);

    return (
        <Grid container spacing={1} sx={{ margin: 5, padding: 5 }}>
            {productos.map((producto, index) => {
                return (
                    <Grid
                        component={NavLink}
                        to={`/shop/${producto.slug}`}
                        key={index}
                        size={{ xs: 12, md: 6, lg: 3 }}
                        sx={{ mb: 4, textDecoration: "none" }}
                    >
                        <TiendaCard
                            image={`${producto.imagen}`}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            color={"blancoPerla.main"}
                        ></TiendaCard>
                    </Grid>
                );
            })}
        </Grid>
    );
}
