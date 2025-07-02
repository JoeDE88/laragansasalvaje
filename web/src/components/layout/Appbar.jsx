import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router";
import { routeAppBar } from '../../routes/routeAppBar';
import Logo from "../../assets/logo/Logo.png"
import { Card, CardMedia } from '@mui/material';

function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color='blancoPerla' elevation={0} sx={{ mb: 4 }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ position: 'relative' }}>
          <Box sx={{ flexGrow: 1, display: { sm: 'flex', lg: 'none' } }}>
            <Button
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color='secondary'
              sx={{
                "&:hover": {
                  backgroundColor: "transparent"
                }
              }}
            >MENU
            </Button>
            <Menu
              disablePortal
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {routeAppBar.map((page) => (
                <MenuItem
                  key={page.name}
                  component={NavLink}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    backgroundColor: 'tertiary.main',
                    color: 'blancoPerla.main',
                    "&:hover": {
                      backgroundColor: "blancoPerla.main",
                      color: 'blancoPerla.text'
                    }
                  }}>
                  <Typography
                    sx={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: {xs:'none', lg: 'flex' } }}>
            {routeAppBar.map((page) => (
              <Button
                key={page.name}
                component={NavLink}
                to={page.path}
                sx={{ color: 'inherit', my: 2, display: 'block', minWidth: 0 }}
                onClick={handleCloseNavMenu}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Button component={NavLink} to="/">
              <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none', marginTop: 2 }}>
                <CardMedia
                  component="img"
                  src={Logo}
                  alt="Logo"
                  sx={{ height: 100, width: 200, objectFit: 'contain' }}
                />
              </Card>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;