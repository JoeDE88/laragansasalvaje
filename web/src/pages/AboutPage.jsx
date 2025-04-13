import { Box, Card, Container, Typography } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import ResponsiveAppBar from "../components/Appbar";
import propic from "../assets/about/profilepic.jpg"
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Container maxWidth="lg">
                <Typography variant="h4">About Lara gansa salvaje:</Typography>
                <Box sx={{mt:5 }}>
                    <Box sx={{ alignItems: 'center' }}>
                        <Card sx={{ maxWidth: 500, margin: 'auto' }}>
                            <CardMedia sx={{ height: 400 }} image={propic}></CardMedia>
                        </Card>
                    </Box>
                    <Typography sx={{mt:4}} style={{wordWrap: "break-word"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.<br/> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.<br/> Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.</Typography>
                </Box>
            </Container>
            <Footer></Footer>
        </>
    )
}