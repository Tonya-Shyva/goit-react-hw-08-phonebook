import { Form } from 'formik';
import styled from 'styled-components';

export const LoginFormStyled = styled(Form)`
  width: 320px;
`;

export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const ErrorMessageStyled = styled.div`
  color: red;
`;
