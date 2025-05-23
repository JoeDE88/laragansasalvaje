import { Box, Container, CssBaseline } from "@mui/material";
import ResponsiveAppBar from "./Appbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Box component={'main'} sx={{ flexGrow: 1 }}>{children}</Box>
            </Box>
            <Box component={'footer'} sx={{}}>
                <Footer></Footer>
            </Box>
        </>
    )
}