import { createTheme } from "@mui/material";

const blancoPerla = '#E3D9C7'

export const theme = createTheme({
    palette: {
        blancoPerla: {
            main: blancoPerla,
            text: '#011627'
        },
        secondary: {
            main: '#170F11',
            text: '#E3D9C7'
        },
        tertiary: {
            main: '#5D3A00',
            text: '#011627'
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