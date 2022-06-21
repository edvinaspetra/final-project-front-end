import React from 'react';
import {
  Typography,
  Box,
  Container,
  Paper,
} from '@mui/material';

const SouvenirPage: React.FC = () => (
  <Container>
    <Typography
      component="h2"
      variant="h3"
      sx={{
        color: 'white',
        fontFamily: 'Arial',
        fontWeight: 500,
        py: 3,
      }}
    >
      Free tours on every Thursday
    </Typography>
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: { xs: 'column', sm: 'column', md: 'row' },
      gap: 3,
    }}
    >
      <Paper sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 2,
        height: { sm: '100%', md: '340px' },
        width: { sm: '100%', md: '500px' },
        boxShadow: '0px 3px 10px 3px black',
      }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRva3lvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1100&q=60"
          sx={{
            width: '100%',
          }}
        />
        <Typography variant="h5">Tokyo</Typography>
        <Typography textAlign="center">Shibuya - Shinjuku - Sensō-ji - Tokyo Tower</Typography>
        <Typography>Meeting point: Shibuya crossing at 9 a.m.</Typography>
      </Paper>

      <Paper sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 2,
        height: { sm: '100%', md: '340px' },
        width: { sm: '100%', md: '500px' },
        boxShadow: '0px 3px 10px 3px black',
      }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3lvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60"
          sx={{
            width: '100%',
          }}
        />
        <Typography variant="h5">Kyoto</Typography>
        <Typography textAlign="center">Toji - Nishiki - Arashiyama - Nijō Castle</Typography>
        <Typography>Meeting point: Toji at 9 a.m.</Typography>
      </Paper>

      <Paper sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 2,
        height: { sm: '100%', md: '340px' },
        width: { sm: '100%', md: '500px' },
        boxShadow: '0px 3px 10px 3px black',
      }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b3Nha2F8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          sx={{
            width: '100%',
          }}
        />
        <Typography variant="h5">Osaka</Typography>
        <Typography textAlign="center">Umeda - Dotonburi - Namba - Tsutenkaku</Typography>
        <Typography>Meeting point: Umeda station at 9 a.m.</Typography>
      </Paper>
    </Box>
    <Typography
      component="h2"
      variant="h3"
      sx={{
        color: 'white',
        fontFamily: 'Arial',
        fontWeight: 500,
        py: 3,
      }}
    >
      Souvenirs you can get on tour:
    </Typography>
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: { xs: 'column', sm: 'column', md: 'row' },
      gap: 3,
      mb: 3,
    }}
    >
      <Paper sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 2,
        height: { sm: '100%', md: '340px' },
        width: { sm: '80%', md: '500px' },
        boxShadow: '0px 3px 10px 3px black',
      }}
      >
        <Box
          component="img"
          src="https://www.euro-knife.com/sub/euro-noze.sk/shop/product/resized/cold-steel-katana-imperial-sword-2606.thumb_434x516.jpg?t=1511593394"
          sx={{
            width: { xs: '40%', sm: '40%', md: '80%' },
          }}
        />
        <Typography variant="h5">Katana</Typography>
      </Paper>

      <Paper sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 2,
        height: { sm: '100%', md: '340px' },
        width: { sm: '80%', md: '500px' },
        boxShadow: '0px 3px 10px 3px black',
      }}
      >
        <Box
          component="img"
          src="https://m.media-amazon.com/images/I/71cvKEwWL9L._AC_SL1500_.jpg"
          sx={{
            width: { xs: '40%', sm: '40%', md: '80%' },
          }}
        />
        <Typography variant="h5">Fridge sticker</Typography>
      </Paper>

      <Paper sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 2,
        height: { sm: '100%', md: '340px' },
        width: { sm: '80%', md: '500px' },
        boxShadow: '0px 3px 10px 3px black',
      }}
      >
        <Box
          component="img"
          src="https://m.media-amazon.com/images/I/51PUsYn2PkL._AC_SX466_.jpg"
          sx={{
            width: { xs: '40%', sm: '40%', md: '80%' },
          }}
        />
        <Typography variant="h5">Sake bottle and cups</Typography>
      </Paper>

      <Paper sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 2,
        height: { sm: '100%', md: '340px' },
        width: { sm: '80%', md: '500px' },
        boxShadow: '0px 3px 10px 3px black',
      }}
      >
        <Box
          component="img"
          src="https://cdn.shopify.com/s/files/1/1969/5775/products/Kameda-Kakinotane-Snack-Rice-Crackers-with-Peanuts-190g-Japanese-Taste_91cbf589-ccee-4010-99d6-f23744fa5373.jpg?v=1628851430"
          sx={{
            width: { xs: '40%', sm: '40%', md: '80%' },

          }}
        />
        <Typography variant="h5">Japanese snack</Typography>
      </Paper>
    </Box>
  </Container>
);

export default SouvenirPage;
