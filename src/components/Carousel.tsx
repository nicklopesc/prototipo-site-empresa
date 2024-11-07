import React from 'react';
import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Home1 from "../assets/imgs/Home1.jpg";
import Home2 from "../assets/imgs/Home2.jpg";
import Home3 from "../assets/imgs/Home3.jpg";

const images = [Home1, Home2, Home3];
const texts = [
  "Bem-vindo à nossa consultoria! Estamos prontos para impulsionar o seu sucesso.",
  "Oferecemos soluções inovadoras que atendem às necessidades do seu negócio.",
  "Transformamos desafios em oportunidades para ajudar sua empresa a crescer."
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  
  const getTextPosition = (i: number) => {
    
    return i % 2 === 0 ? 'left' : 'right';
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', height: { xs: '40vh', sm: '70vh', md: '90vh' } }}>
      {images.map((src, i) => (
        <Box
          key={i}
          sx={{
            display: index === i ? 'block' : 'none',
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            transition: 'opacity 1s ease-in-out',
            position: 'relative',
          }}
        >
          
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            }}
          />

          
          {index === i && (
            <Typography
            variant="h4"
            sx={{
              color: 'white',
              position: 'absolute',
              top: { xs: '40%', md: '50%' },
              fontWeight: 500,
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
              opacity: index === i ? 1 : 0,
              transform: `${index === i ? 'translateX(0)' : 'translateX(-20px)'} translateY(-50%)`, 
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              maxWidth: '50%',
              [getTextPosition(i)]: '5%',
              fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' },
              [getTextPosition(i)]: { xs: '50%', sm: '5%' },
              textAlign: { xs: 'center', sm: getTextPosition(i) },
            }}
          >
            {texts[i]}
          </Typography>
          
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Carousel;
