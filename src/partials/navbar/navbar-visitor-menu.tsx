import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import NavbarLink from './navbar-link';

const NavbarVisitorMenu: React.FC = () => (
  <>
    <NavbarLink to="/auth/login" sx={{ display: { xs: 'none', sm: 'flex' } }}>Login</NavbarLink>
    <NavbarLink to="/auth/login" sx={{ display: { xs: 'flex', sm: 'none' } }}>
      <LoginIcon />
    </NavbarLink>
    <NavbarLink to="/auth/register" sx={{ display: { xs: 'none', sm: 'flex' } }}>Register</NavbarLink>
    <NavbarLink to="/auth/register" sx={{ display: { xs: 'flex', sm: 'none' } }}>
      <AppRegistrationIcon />
    </NavbarLink>
  </>
);

export default NavbarVisitorMenu;
