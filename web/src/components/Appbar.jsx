import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { routeAppBar } from '../routes/routeAppBar';
import { NavLink } from "react-router";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color='blancoPerla' elevation={0} sx={{mb:4}}>
      <Container maxWidth="xl">
        <Toolbar >
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  onClick={handleCloseNavMenu}
                  sx={{
                    backgroundColor: 'secondary.main',
                    color: 'secondary.text',
                    "&:hover": {
                      backgroundColor: "blancoPerla.main",
                      color: 'blancoPerla.text'
                    }
                  }}>
                  <Typography
                    component={NavLink}
                    to={page.path}
                    sx={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {routeAppBar.map((page) => (
              <Button
                key={page.name}
                component={NavLink}
                to={page.path}
                sx={{ textDecoration: 'none', color: 'inherit',my: 2, display: 'block'  }}
                onClick={handleCloseNavMenu}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton component={NavLink} to="/" sx={{ p: 0 }}>
              <Typography sx={{ color: 'secondary.main' }}>LOGO</Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;