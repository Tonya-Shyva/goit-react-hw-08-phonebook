import styled from 'styled-components';
import { GiExitDoor } from 'react-icons/gi';

export const UserNavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserNavWelcomeText = styled.p`
  color: #000;
  margin-right: 15px;
`;

export const UserName = styled.span`
  color: #21aeea;
`;

export const IconButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  outline: none;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
    background-color: #21aeeab5;
  }
`;

export const IconSvg = styled(GiExitDoor)`
  width: 30px;
  height: 35px;
`;
