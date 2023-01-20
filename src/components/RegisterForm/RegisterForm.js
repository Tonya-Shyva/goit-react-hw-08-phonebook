import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { register } from 'redux/auth/operations';
import { BtnStyled } from 'components/common/BtnStyled';
import { Form, IconPassword, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [toggleIcon, setToggleIcon] = useState(<AiOutlineEyeInvisible />);
  const [type, setType] = useState('password');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = e => {
    const { name } = e.target;
    if (name === 'name') {
      return setName(e.target.value);
    }
    if (name === 'email') {
      return setEmail(e.target.value);
    }
    if (name === 'password') {
      return setPassword(e.target.value);
    }
    if (name === 'confirmPassword') {
      return setConfirmPassword(e.target.value);
    }
    return;
  };

  const togglePassInput = e => {
    if (type === 'password') {
      setType('text');
      setToggleIcon(<AiOutlineEye />);
    } else {
      setType('password');
      setToggleIcon(<AiOutlineEyeInvisible />);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const confirmPassword = form.elements.confirmPassword.value;
    if (
      email === '' ||
      password === '' ||
      name === '' ||
      confirmPassword === ''
    ) {
      toast('Please, fill in all fields');
      return;
    }
    if (password.length < 7) {
      toast('Password must be at least 7 symbols long');
      return;
    }
    if (password !== confirmPassword) {
      toast('Wrong confirmation of password');
      form.elements.confirmPassword.value = '';
      return;
    }
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <input type="text" name="name" value={name} onChange={handleChange} />
      </Label>
      <Label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Password
        <input
          type={type}
          name="password"
          value={password}
          onChange={handleChange}
        />
        <IconPassword onClick={togglePassInput}>{toggleIcon}</IconPassword>
      </Label>
      <Label>
        Confirm password
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
      </Label>
      <BtnStyled type="submit">Register</BtnStyled>
    </Form>
  );
};
