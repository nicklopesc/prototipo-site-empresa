import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer: React.FC = () => {
  return (
    <Box sx={{
      backgroundColor: '#394154',
      color: '#ffffff',
      padding: '20px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
       
        <Grid item>
          <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
            EX Company
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" sx={{ fontSize: '14px', color: '#b0b0b0', textAlign:{xs:"center", md:""} }}>
            © 2024 EX Company Inc. - Empresa de Tecnologia. CNPJ: 12.345.678/0001-90
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" sx={{ fontSize: '14px', color: '#b0b0b0',textAlign:{xs:"center", md:""} }}>
            Avenida das Nações Unidas, 5000 - São Paulo, SP - 04578-000
          </Typography>
        </Grid>

     
        <Grid item>
          <IconButton href="https://www.instagram.com/excompany" target="_blank" sx={{ color: '#ffffff', marginLeft: 2 }}>
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://wa.me/5511999887766" target="_blank" sx={{ color: '#ffffff', marginLeft: 2 }}>
            <WhatsAppIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
