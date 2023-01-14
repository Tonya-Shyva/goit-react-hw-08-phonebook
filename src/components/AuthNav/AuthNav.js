import { StyledLink } from 'components/common/StyledLink';
import { AuthNavWrap } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrap>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </AuthNavWrap>
  );
};
