import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LoginFormStyled, LoginLabel } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === '' || password === '') {
      toast('Please, fill in all fields');
      return;
    }
    dispatch(
      logIn({
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
      <LoginLabel>
        Email
        <input type="email" name="email" />
      </LoginLabel>
      <LoginLabel>
        Password
        <input type="password" name="password" />
      </LoginLabel>
      <button type="submit">Log In</button>
    </LoginFormStyled>
  );
};
