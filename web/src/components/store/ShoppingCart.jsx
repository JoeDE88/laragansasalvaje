import { Box, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function () {
    return (
        <Box>
            <Box
                position={"sticky"}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    top: 'auto',
                    bottom: {
                        xs: 25,
                        lg: 0
                    },
                    width: {
                        xs: '270px',
                        lg: '100%'
                    },
                    height: {
                        xs: '65px'
                    },
                    paddingX: {
                        xs: 2,
                        lg: 0
                    },
                    borderRadius: {
                        xs: 8,
                        lg: 0
                    },
                    backgroundColor: 'secondary.main',
                    color: 'secondary.text',
                }}>
                <Box sx={{
                    px: {
                        xs: 1,
                        lg: 5
                    }
                }}>
                    <ShoppingCartIcon variant='h6'></ShoppingCartIcon>
                </Box>
                <Box sx={{
                    p: {
                        xs: 1,
                        lg: 0
                    }
                }}>
                    <Typography variant="h6">1 item </Typography>
                </Box>
                <Box sx={{ p: 1, marginLeft: 'auto', marginRight: 3, px: { lg: 3 } }}>
                    <Typography variant='h6'>60 € </Typography>
                </Box>
            </Box>
        </Box>
    )
}