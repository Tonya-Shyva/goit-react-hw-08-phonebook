import { StyledLink } from 'components/common/StyledLink';
import { useAuth } from 'hooks';
import { HomeStyledLink, Nav, PhoneIcon } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <HomeStyledLink to="/">
        <PhoneIcon />
        Home
      </HomeStyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </Nav>
  );
};
