import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { baseURL } from "../../../services/api/api"

export default function ListaPublicaciones() {
    const [publicaciones, setPublicaciones] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/blog/publicaciones/`)
            .then((res) => res.json())
            .then((data) => setPublicaciones(data))
    }, [])

    return (
        <>
            <Typography variant="h5">Publicaciones existentes:</Typography>
            <ul>
                {publicaciones.map((publicacion) => {
                    return (
                        <li>
                            <Typography>{publicacion.nombre}</Typography>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}