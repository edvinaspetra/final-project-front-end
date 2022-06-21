import React from 'react';
import {
  Typography,
  Box,
  Container,
  ListItem,
  List,
} from '@mui/material';

const HomePage: React.FC = () => (
  <Box>
    <Box
      sx={{
        width: '100%',
        boxShadow: '0px -170px 200px -50px #474747 inset',
      }}
    >

      <Box
        component="img"
        src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1953&q=80"
        sx={{
          width: '100%',
          objectFit: 'contain',
          zIndex: -1,
          position: 'relative',
        }}
      />
    </Box>
    <Container>

      <Typography
        component="h1"
        variant="h2"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          mb: 3,
          position: 'absolute',
          top: {
            xs: '20%', sm: '25%', md: '30%', lg: '35%',
          },
          color: 'white',
          fontFamily: 'Arial',
          fontWeight: 900,
          fontSize: {
            xs: 40, sm: 60, md: 70, lg: 80, xl: 90,
          },
        }}
      >
        WELCOME TO
        <Typography
          component="span"
          variant="h1"
          sx={{
            color: 'white',
            fontFamily: 'Arial',
            fontWeight: 900,
            fontSize: {
              xs: 80, sm: 110, md: 130, lg: 140, xl: 150,
            },
          }}
        >
          JAPAN
        </Typography>
      </Typography>
      <Typography variant="h5" sx={{ color: 'white', mt: 5 }}>
        Top 5 reasons to visit the land of the rising sun:
      </Typography>
      <List sx={{ color: 'white' }}>
        <ListItem>We offering you free tours on every Thursday in biggest cities of Japan.</ListItem>
        <ListItem>One of the best food in the world.</ListItem>
        <ListItem>Beautiful national parks and never seen nature.</ListItem>
        <ListItem>The oldest temples and natural wonders.</ListItem>
        <ListItem>Probably the most known mount - Fuji.</ListItem>

      </List>
    </Container>
  </Box>
);

export default HomePage;
