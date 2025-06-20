import { Button } from "@mui/material";

export default function GreenButton({ texto, onClick,component,to }) {
    return (
        <Button
            onClick={onClick}
            variant="contained"
            size="large"
            sx={(theme) => ({
                backgroundColor: 'blancoPerla.main',
                color: 'tertiary.main',
                border: `solid 1px ${theme.palette.tertiary.main}`,
                "&:hover": {
                    backgroundColor: 'tertiary.main',
                    color: 'blancoPerla.main'
                }
            })}
            disableElevation
            component={component} to={to}
        >
            {texto}
        </Button>
    )
}