import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/operations';
import {
  ErrorMessageStyled,
  LoginFormStyled,
  LoginLabel,
} from './LoginForm.styled';

const initValues = {
  email: '',
  password: '',
};

const shema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(7).required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(
      logIn({
        email,
        password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initValues}
      validationSchema={shema}
      onSubmit={handleSubmit}
    >
      <LoginFormStyled autoComplete="off">
        <LoginLabel>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email">
            {msg => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
          </ErrorMessage>
        </LoginLabel>
        <LoginLabel>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password">
            {msg => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
          </ErrorMessage>
        </LoginLabel>
        <button type="submit">Log In</button>
      </LoginFormStyled>
    </Formik>
  );
};
