import { Card, CardMedia } from "@mui/material";

const array = [
    {
        "nombre": "1",
        "imagen": "https://www.laguiago.com/wp-content/uploads/2023/05/Rototom-SunSplash-2023-todos-los-detalles-del-festival_cartel.jpg"
    }
]

export default function EventoCard() {
    return (
        <>
            {
                array.map((arr, index) => {
                    return (
                        <Card key={index} sx={{margin:'auto',width:500,height:600}}>
                            <CardMedia
                                component='img'
                                image={arr.imagen} />
                        </Card>)
                })
            }
        </>
    )
}