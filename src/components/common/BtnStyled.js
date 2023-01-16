import styled from 'styled-components';

export const BtnStyled = styled.button`
  width: 100px;
  border-radius: 4px;
  transition: backround-color 250ms linear;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #21aeeab5;
    border-color: transparent;
  }
`;
