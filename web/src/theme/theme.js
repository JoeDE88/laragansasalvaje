import { createTheme } from "@mui/material";

const blancoPerla = '#FFFAF0'

export const theme = createTheme({
    palette: {
        blancoPerla: {
            main: blancoPerla,
            text: '#170F11'
        },
        secondary: {
            main: '#170F11',
            text: '#E3D9C7'
        },
        tertiary: {
            main: '#007C77',
            text: '#170F11'
        }
    },
    typography: {
        fontFamily: "'Merriweather', serif"
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            }
        }
    }
})