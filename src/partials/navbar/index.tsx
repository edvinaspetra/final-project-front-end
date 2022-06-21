import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
} from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import NavbarLink from './navbar-link';
import NavbarAuthMenu from './navbar-auth-menu';
import NavbarVisitorMenu from './navbar-visitor-menu';
import { useRootSelector } from '../../store/hooks';
import { selectAuthLoggedIn } from '../../store/selectors';

const Navbar: React.FC = () => {
  const loggedIn = useRootSelector(selectAuthLoggedIn);

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#00000081' }}>
      <Container>
        <Toolbar sx={{
          px: { xs: 0, sm: 0 },
          justifyContent: 'space-between',
        }}
        >
          <Box>
            <NavbarLink to="/">
              <Box sx={{
                width: 25,
                height: 25,
                bgcolor: '#bc002d',
                borderRadius: 15,
                mr: 1,
              }}
              />
              Japan
            </NavbarLink>
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <NavbarLink to="/souvenir" sx={{ display: { xs: 'none', sm: 'flex' } }}>Tour/Souvenir</NavbarLink>
            <NavbarLink to="/souvenir" sx={{ display: { xs: 'flex', sm: 'none' } }}>
              <TravelExploreIcon />
              /
              <CardGiftcardIcon />
            </NavbarLink>
            <NavbarLink to="/about" sx={{ display: { xs: 'none', sm: 'flex' } }}>Info</NavbarLink>
            <NavbarLink to="/about" sx={{ display: { xs: 'flex', sm: 'none' } }}>
              <PermDeviceInformationIcon />
            </NavbarLink>
            <NavbarLink to="/contacts" sx={{ display: { xs: 'none', sm: 'flex' } }}>Contacts</NavbarLink>
            <NavbarLink to="/contacts" sx={{ display: { xs: 'flex', sm: 'none' } }}>
              <ContactPhoneIcon />
            </NavbarLink>
          </Box>
          <Box sx={{ display: 'flex' }}>
            {loggedIn ? <NavbarAuthMenu /> : <NavbarVisitorMenu />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
