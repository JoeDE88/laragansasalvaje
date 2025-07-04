import { Box, Card, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {getEventos} from "../../services/api/eventos"

export default function EventoCard() {
    const [eventos, setEventos] = useState([])

    useEffect(() => {
        getEventos().then((eventos) => setEventos(eventos))
        .catch((error) => {
                console.error("Error al obtener los eventos:", error);
            });
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
                            <hr width='250px' />
                            <Box sx={{ marginBottom: 2 }}></Box>
                        </>
                    )
                })
                }
            </Box>
        </>
    )
}