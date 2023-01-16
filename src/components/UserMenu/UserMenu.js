import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import {
  IconButton,
  UserName,
  UserNavWrap,
  UserNavWelcomeText,
  IconSvg,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserNavWrap>
      <UserNavWelcomeText>
        Welcome, <UserName>{user.name}</UserName>
      </UserNavWelcomeText>
      <IconButton
        type="button"
        aria-label="logout"
        onClick={() => dispatch(logOut())}
      >
        <IconSvg />
      </IconButton>
    </UserNavWrap>
  );
};
