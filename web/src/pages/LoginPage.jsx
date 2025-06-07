import { Box, TextField } from "@mui/material";

export default function LoginPage() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>

                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Username"
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                        />
                    </div>
                </Box>
            </Box>
        </>
    )
}