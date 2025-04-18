import { Box, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function () {
    return (
        <>
            <Box
                position={"sticky"}
                sx={{
                    margin: 'auto',
                    bottom: 25,
                    top: 'auto',
                    width: '250px',
                    borderRadius:8,
                    backgroundColor: 'secondary.main',
                    color: 'secondary.text',
                }}>
                <Toolbar>
                    <Box sx={{ p: 1 }}>
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Typography>1 item </Typography>
                    </Box>
                    <Box sx={{ p: 1, marginLeft: 'auto', marginRight: 0 }}>
                        <Typography >60 € </Typography>
                    </Box>
                </Toolbar>
            </Box>
        </>
    )
}