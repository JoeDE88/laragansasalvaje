import { Typography } from "@mui/material";

export default function ({ titulo }) {
    return (
        <>
            <Typography
                variant="h3"
                color="secondary"
                sx={{
                    textAlign: 'center',
                    mb: 4
                }}>{titulo}</Typography>
        </>
    )
}