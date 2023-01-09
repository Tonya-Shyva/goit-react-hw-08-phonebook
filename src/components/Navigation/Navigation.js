import { Outlet } from 'react-router';

import {
  AuthNav,
  Header,
  HomeStyledLink,
  PhoneIcon,
  StyledLink,
} from './Navigation.styled';
import { NavigationWrap } from './Navigation.styled';

export const Navigation = () => (
  <>
    <Header>
      <NavigationWrap>
        <HomeStyledLink to="/" end>
          <PhoneIcon />
          Home
        </HomeStyledLink>
        <AuthNav>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Log in</StyledLink>
        </AuthNav>
      </NavigationWrap>
    </Header>

    <Outlet />
  </>
);
