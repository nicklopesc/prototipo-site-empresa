import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Divider } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';


const ServicesPage: React.FC = () => {
  const services = [
    { 
      title: 'Consultoria', 
      description: 'Oferecemos consultoria estratégica para ajudar empresas a identificar oportunidades e desenvolver soluções personalizadas.'
    },
    { 
      title: 'Desenvolvimento', 
      description: 'Desenvolvemos aplicações escaláveis e modernas, garantindo uma experiência de usuário eficiente e adaptável.'
    },
    { 
      title: 'Marketing', 
      description: 'Criamos estratégias de marketing digital para engajar seu público e aumentar a visibilidade e o crescimento do seu negócio.'
    },
  ];

  return (
    <Container sx={{ mt: 4 }}>
     
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#394154', mb: 1 }}>
          Conheça Nossos Serviços
        </Typography>
        <Typography variant="body1" sx={{ color: "#6c757d" }}>
          Soluções sob medida para o sucesso do seu negócio.
        </Typography>
      </Box>

      <Box mb={6}>
        <Typography variant="h5" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', color: '#394154' }}>
          Como Funciona
        </Typography>
        <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" sx={{fontSize:{xs:"16px"}, fontWeight:"bold"}}>
              Passo 1: Consulta
            </Typography>
            <Typography sx={{fontSize:{xs:"14px"}}}>Realizamos uma consulta para entender suas necessidades.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" sx={{fontSize:{xs:"16px"}, fontWeight:"bold"}}>
              Passo 2: Proposta
            </Typography>
            <Typography sx={{fontSize:{xs:"14px"}}}>Elaboramos uma proposta personalizada com base em suas necessidades.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" sx={{fontSize:{xs:"16px"}, fontWeight:"bold"}}>
              Passo 3: Implementação
            </Typography>
            <Typography sx={{fontSize:{xs:"14px"}}}>Iniciamos a implementação do serviço conforme acordado.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" sx={{fontSize:{xs:"16px"}, fontWeight:"bold"}}>
              Passo 4: Avaliação
            </Typography>
            <Typography sx={{fontSize:{xs:"14px"}}}>Avaliaremos o resultado e faremos ajustes, se necessário.</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      </Box>

      <Divider sx={{ my: 4 }} />

      
      <Box mt={4}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#394154', textAlign: 'center' }}>
          Nossos Serviços
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 1 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{
                p: 2,
                marginBottom:"15px",
                backgroundColor: '#394154',
                color: 'white',
                textAlign: 'center',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s ease' },
              }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{service.title}</Typography>
                  <Divider sx={{ my: 1, borderColor: "#ffffff33" }} />
                  <Typography variant="body2" sx={{ color: "#f0f0f0" }}>{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ServicesPage;
