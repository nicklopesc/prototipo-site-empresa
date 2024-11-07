import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, TextField, Button, Typography, Container, Paper, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

const ContactPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>();

  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<ContactFormInputs> = data => {
    console.log(data);

   
    setAlertMessage("Mensagem enviada com sucesso!");

   
    reset();

  
    setTimeout(() => {
      setAlertMessage(null);
    }, 3000);
  };

  return (
    <Box sx={{ backgroundColor: '#f4f6f8', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{
          padding: 4,
          borderRadius: 2,
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#ffffff'
        }}>
          <Typography variant="h5" align="center" sx={{ color: '#394154', fontWeight: 700 }}>
            Entre em Contato Conosco
          </Typography>

          <Typography variant="body1" align="center" sx={{ color: '#808080', marginBottom: 3 }}>
            Preencha os campos abaixo e responderemos o mais rápido possível.
          </Typography>

          {alertMessage && (
            <Alert severity="success" sx={{ marginBottom: 2 }}>
              {alertMessage}
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              label="Nome"
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
              {...register('name', { required: 'Nome é obrigatório' })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
              {...register('email', {
                required: 'Email é obrigatório',
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Endereço de email inválido',
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Mensagem"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              sx={{ marginBottom: 3 }}
              {...register('message', { required: 'Mensagem é obrigatória' })}
              error={!!errors.message}
              helperText={errors.message?.message}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              fullWidth
              sx={{
                backgroundColor: '#394154',
                color: '#ffffff',
                paddingY: 1.5,
                '&:hover': {
                  backgroundColor: '#4A6B8A',
                },
                fontWeight: 'bold',
              }}
            >
              Enviar Mensagem
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactPage;
