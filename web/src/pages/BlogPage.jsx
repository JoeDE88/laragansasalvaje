import {  Typography } from "@mui/material";
import ResponsiveAppBar from "../components/Appbar";
import BlogGrid from "../components/BlogGrid.jsx";
import Footer from "../components/Footer.jsx";

export default function BlogPage (){

    return(
        <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Typography variant='h4' sx={{textAlign:'center',mb:5}}>Blog</Typography>
        <BlogGrid></BlogGrid>
        <Footer></Footer>
        </>
    )
}