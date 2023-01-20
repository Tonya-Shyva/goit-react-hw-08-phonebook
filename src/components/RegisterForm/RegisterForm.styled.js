import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const IconPassword = styled.span`
  position: absolute;
  top: 20px;
  right: 10px;
  cursor: pointer;
  user-select: none;
  z-index: 99;
`;
