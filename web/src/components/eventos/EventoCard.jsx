import { Box, Card, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { baseURL } from "../../services/api/api";

export default function EventoCard() {
    const [eventos, setEventos] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/eventos/lista-eventos/`)
            .then((resp) => resp.json())
            .then((data) => {
                setEventos(data)
            })
    }, [])

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                padding: 4
            }}>
                {eventos.map((evento, index) => {
                    return (
                        <>
                            <Typography variant="h4">{evento.nombre}</Typography>
                            <Card key={index} sx={{ margin: 'auto', backgroundColor: 'blancoPerla.main' }}>
                                <CardMedia
                                    component='img'
                                    image={`${evento.imagen}`}
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '80vh',
                                        objectFit: 'contain'
                                    }} />
                            </Card>
                            <hr width='250px'/>
                            <Box sx={{marginBottom:2}}></Box>
                        </>
                    )
                })
                }
            </Box>
        </>
    )
}