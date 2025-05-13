import { Box, Card, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { baseURL } from "../../services/api/api";


export default function EventoCard() {
    const [eventos, setEventos] = useState([])

    useEffect(() => {
        fetch(`${baseURL}eventos/todos/`)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
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
                                    image={`${baseURL}${evento.imagen}`}
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '80vh',
                                        objectFit: 'contain'
                                    }} />
                            </Card>
                        </>
                    )
                })
                }
            </Box>
        </>
    )
}