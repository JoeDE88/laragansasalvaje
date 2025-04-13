import { Box, Container, Paper } from "@mui/material";

export default function EventBanner() {
    return (
        <>
            <Container maxWidth="xl">
                <Paper sx={{ height: 100 }}>
                    <Box sx={{textAlign:'center'}}>
                         Banner Exposición 5 - 25 de junio.
                    </Box>
                </Paper>
            </Container>
        </>
    )
}