import { Box, Container, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import NavBar from "../components/admin/layout/NavBar"
import Titulo from "../components/layout/Titulo";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import Obras from "../components/admin/layout/Obras";
import Eventos from "../components/admin/layout/Eventos";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function DashBoard() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <NavBar></NavBar>
            <Titulo titulo={'Bienvenida Gansa'} />
            <Container>
                <Typography variant="h5">¿Qué quieres hacer hoy?</Typography>
                <Box sx={{ width: '100%', bgcolor: 'blancoPerla' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Añadir obra" {...a11yProps(0)} />
                            <Tab label="Añadir publicación" {...a11yProps(1)} />
                            <Tab label="Añadir evento" {...a11yProps(2)} />
                            <Tab label="Añadir producto a la tienda" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Obras></Obras>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Item Two
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <Eventos></Eventos>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                        Item Three
                    </CustomTabPanel>
                </Box>
            </Container>
        </>
    )
}