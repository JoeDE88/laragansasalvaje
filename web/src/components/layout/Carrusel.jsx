import { Box, Typography } from '@mui/material';
import { Carousel } from 'antd';
import { useEffect, useState } from 'react';
import { baseURL } from '../../services/api/api';

export default function Carrusel() {
    const [obras, setObras] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/galeria/lista-obras/`)
            .then((response) => response.json())
            .then((data) => {
                setObras(data)
            })
    }, [])

    return (
        <Box sx={{ width: '100%', margin: 'auto' }}>
            {obras.length === 0 ? (
                <Box
                    sx={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h3">
                        La página se abrirá cuando el Gansismo surja.
                    </Typography>
                </Box>
            ) : (
                < Carousel autoplay autoplaySpeed={5000} adaptiveHeight={true} dots={false} fade={true}>
                    {obras.map((obra, index) => {
                        return (
                            <Box key={index} sx={{ height: { xs: 200, sm: 300, md: 400 }, width: '100%' }}>
                                <img
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        display: 'block'
                                    }} src={`${obra.imagen}`}></img>
                            </Box>
                        )
                    })}
                </Carousel>)}
        </Box >
    )
}