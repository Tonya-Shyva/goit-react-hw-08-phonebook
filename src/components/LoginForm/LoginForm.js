import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LoginFormStyled, LoginLabel } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = e => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleChangePassword = e => {
    const { value } = e.target;
    setPassword(value);
  };

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
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
      </LoginLabel>
      <LoginLabel>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />
      </LoginLabel>
      <button type="submit">Log In</button>
    </LoginFormStyled>
  );
};
