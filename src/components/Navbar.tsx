import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Home', to: '/' },
    { text: 'Sobre', to: '/about' },
    { text: 'Serviços', to: '/services' },
    { text: 'Contato', to: '/contact' },
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#394154', boxShadow: 3 }}> 
        <Container>
          <Toolbar>
            <Typography 
              variant="h6" 
              component={Link} 
              to="/" 
              sx={{ flexGrow: 1, color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
            >
              EX Company
            </Typography>

            
            <Box sx={{ display: { xs: 'none', sm: 'block' }, gap: 2 }}>
              {menuItems.map((item) => (
                <Button 
                  key={item.text} 
                  component={Link} 
                  to={item.to} 
                  sx={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', '&:hover': { color: '#E5E5E5' } }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

           
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: 'block', sm: 'none' } }}
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

     
      <Box 
        sx={{ 
          display: { xs: 'block', sm: 'none' },
          position: 'absolute',
          top: '64px',
          left: 0,
          right: 0,
          backgroundColor: '#5A7077', 
          color: 'white',
          padding: '10px',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
          zIndex: 1200, 
        }}
      >
        {menuItems.map((item) => (
          <Button
            key={item.text}
            component={Link}
            to={item.to}
            sx={{
              color: 'white',
              textDecoration: 'none',
              width: '100%',
              padding: '10px 0',
              '&:hover': { backgroundColor: '#E5E5E5', color: '#394154' }
            }}
            onClick={toggleMenu}
          >
            {item.text}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default Navbar;
