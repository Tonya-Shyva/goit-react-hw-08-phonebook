import styled from 'styled-components';

export const AppContainer = styled.div`
  display: block;
  font-size: 24px;
  color: '#010101';
  margin: 30px;
`;

export const Title = styled.h1`
  line-height: 1.2;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 15px;
  border: 2px solid #21aeeab5;
  border-radius: 4px;
  box-shadow: 0 0px 3px #21aeeab5;
`;

export const FormLabelStyled = styled.label`
  font-size: 20px;
`;

export const FormInputStyled = styled.input`
  width: 50%;
  margin-top: 10px;
  margin-bottom: 20px;

  &:focus,
  &:hover {
    border: 2px solid #46add9a7;
    border-radius: 2px;
    outline: 2px solid #21aeeab5;
  }
`;
