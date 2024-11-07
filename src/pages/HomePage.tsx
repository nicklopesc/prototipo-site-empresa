import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Box, Paper } from '@mui/material';
import Consultoria from "../assets/imgs/consultoria.jpg";
import Desenvolvimento from "../assets/imgs/desenvolvimento.jpg";
import Marketing from "../assets/imgs/marketing.jpg";
import Carousel from '../components/Carousel';

const HomePage: React.FC = () => {
  
  const services = [
    { title: 'Consultoria', description: 'Soluções personalizadas para o seu negócio.', image: Consultoria },
    { title: 'Desenvolvimento', description: 'Aplicações modernas e escaláveis.', image: Desenvolvimento },
    { title: 'Marketing', description: 'Estratégias para crescimento e presença online.', image: Marketing },
  ];

  return (
    <Box sx={{ textAlign: 'center', marginTop:"1px" }}>
      <Carousel />
     
    
      <Paper sx={{ p: 4, mb: 2, mt: 0.5, textAlign: 'center', backgroundColor: '#394154', color: '#fff' }}>
        <Typography  gutterBottom sx={{ fontWeight: "bold", fontSize:{xs:"18px",  md:"20px"}, }}>
          Sobre Nós
        </Typography>

       
        <Typography 
          variant="h6" 
        
          sx={{
            textAlign: "justify", 
            display: { xs: 'none', sm: 'block' }, 
          }}
        >
          Em 2015, um grupo de visionários decidiu criar uma empresa que fosse mais do que apenas um negócio. 
          Nossa missão sempre foi impactar positivamente a vida das pessoas por meio de soluções inovadoras. 
          Com dedicação, paixão e um foco imenso na qualidade, conseguimos nos tornar líderes no setor.
          Hoje, nossa equipe é composta por profissionais de diversas áreas, todos unidos pela mesma missão: 
          transformar desafios em oportunidades e promover a inovação em cada aspecto do nosso trabalho.
        </Typography>

       
        <Typography 
          variant="subtitle1" 
         
          sx={{
            textAlign: "justify", 
            display: { xs: 'block', sm: 'none' }, 
          }}
        >
          Em 2015, um grupo de visionários decidiu criar uma empresa que fosse mais do que apenas um negócio. 
          Nossa missão sempre foi impactar positivamente a vida das pessoas por meio de soluções inovadoras. 
          
        </Typography>
      </Paper>
     
      <Box sx={{ padding: {xs:"10px", md:"30px" }}}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 , color:"#394154", fontWeight:"bold", fontSize:{xs:"18px", md:"25px"}}}>
          Nossos Serviços
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ transition: '0.3s', '&:hover': { transform: 'scale(1.05)' }, backgroundColor: '#394154' }}>
                <CardMedia component="img" height="160" image={service.image} alt={service.title} />
                <CardContent>
                  <Typography variant="h5" sx={{ color: "white", fontSize:{xs:"18px"} }} gutterBottom>{service.title}</Typography>
                  <Typography variant="body2" sx={{ color: "#f0f0f0" }} color="text.secondary">{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
