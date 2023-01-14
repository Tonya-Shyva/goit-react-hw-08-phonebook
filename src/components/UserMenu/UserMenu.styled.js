import styled from 'styled-components';

export const UserNavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserWelcomeNavText = styled.p`
  color: #000;
  margin-right: 15px;
`;

export const Button = styled.button`
  min-width: 80px;
  height: 40px;
  border-radius: 4px;
  transition: backround-color 250ms linear;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #21aeeab5;
    border-color: transparent;
  }
`;
