import { Box, Card, Container, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/Appbar";
import CardItem from "../components/CardItem";
import propic from "../assets/about/profilepic.jpg"

export default function AboutPage() {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Container maxWidth="lg">
                <Box sx={{backgroundColor:'red'}}>
                    <Card>
                        <CardItem image={propic}/>
                    </Card>
                    <Typography variant="h3">About Lara:</Typography>
                    <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore libero et neque delectus harum beatae ab, accusantium voluptatum inventore iusto, quia incidunt ipsam voluptatem illo! Quis quasi harum aspernatur in!</Typography>
                </Box>
            </Container>

        </>
    )
}