import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function BlogItem({bgColor,titulo,texto}){
    return (
        <Card elevation={0} sx={{height:300}}>
            <CardContent sx={{backgroundColor:bgColor,p:0.5}}>
                <Typography variant="h4" sx={{textAlign:'left',color:'secondary.text'}}>{titulo}</Typography>
            </CardContent>
                <CardMedia/>
                <Typography sx={{p:0.5}}>{texto}</Typography>
        </Card>
    )
}