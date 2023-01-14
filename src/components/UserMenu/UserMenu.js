import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, UserNavWrap, UserWelcomeNavText } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserNavWrap>
      <UserWelcomeNavText>Welcome, {user.name}</UserWelcomeNavText>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserNavWrap>
  );
};
