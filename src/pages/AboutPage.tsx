import React from 'react';
import { Grid, Typography, Avatar, Box, Paper, Divider, Button } from '@mui/material';
import Avatar1 from "../assets/imgs/avatar1.jpg";
import Avatar2 from "../assets/imgs/avatar2.jpg";
import Avatar3 from "../assets/imgs/avatar3.jpg";
import Avatar4 from "../assets/imgs/avatar4.jpg";
import Avatar5 from "../assets/imgs/avatar5.jpg";
import { useNavigate } from 'react-router-dom';

const teamMembers = [
  { name: 'Alice Xavier', role: 'CEO', image: Avatar1 },
  { name: 'Leandro Amaral', role: 'CTO', image: Avatar2 },
  { name: 'Lucas Souza', role: 'CMO', image: Avatar3 },
  { name: 'Ana Lopes', role: 'CMO', image: Avatar4 },
  { name: 'Maurício Soares', role: 'CMO', image: Avatar5 },
];

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const handleLearnMoreClick = () => {
    navigate('/contact'); 
  };
  return (
    <Box sx={{ p: 4, backgroundColor: '#f4f7fb' }}>
    
      <Paper sx={{ p: 6, mb: 6, textAlign: 'center', backgroundColor: '#394154', color: '#fff', borderRadius: 3 }}>
        <Typography   gutterBottom sx={{ mb: 4 , color:"white", fontWeight:"bold", fontSize:{xs:"18px", md:"25px"}}}>
          Sobre Nós
        </Typography>
        <Typography variant="subtitle1" sx={{ lineHeight: 1.6, fontSize: '1.2rem', textAlign:"justify" }}>
          Em 2015, um grupo de visionários decidiu criar uma empresa que fosse mais do que apenas um negócio. 
          Nossa missão sempre foi impactar positivamente a vida das pessoas por meio de soluções inovadoras. 
          Com dedicação, paixão e um foco imenso na qualidade, conseguimos nos tornar líderes no setor. Hoje, nossa equipe é composta por profissionais de diversas áreas, todos unidos pela mesma missão: 
          transformar desafios em oportunidades e promover a inovação em cada aspecto do nosso trabalho.
        </Typography>
      </Paper>

     
      <Divider sx={{ borderColor: '#394154', mb: 4 }} />

   
      <Typography   gutterBottom sx={{ mb: 4 , fontWeight:"bold", fontSize:{xs:"18px",  md:"25px"}, display:"flex", justifyContent:"center"}}>
        Nossa Equipe
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item key={index}>
            <Box textAlign="center" sx={{ transition: 'all 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }}>
              <Avatar 
                src={member.image} 
                alt={member.name} 
                variant="rounded"
                sx={{ 
                  width: 150, 
                  height: 150, 
                  margin: 'auto', 
                  border: '4px solid #fff', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)', 
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'scale(1.1)' }
                }} 
              />
              <Typography variant="h6" sx={{ mt: 2, fontWeight: 600, color: '#394154' }}>
                {member.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                {member.role}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 6, borderColor: '#394154' }} />

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#394154' }}>
          Junte-se a nós na jornada para o futuro!
        </Typography>
        <Button variant="contained"  sx={{ mt: 3, backgroundColor: '#394154', '&:hover': { backgroundColor: '#5f6d7e' } }}  onClick={handleLearnMoreClick}>
          Saiba Mais
        </Button>
      </Box>
    </Box>
  );
};

export default AboutPage;
