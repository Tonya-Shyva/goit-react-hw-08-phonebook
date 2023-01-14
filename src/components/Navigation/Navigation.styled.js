import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdOutlineContactPhone } from 'react-icons/md';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const PhoneIcon = styled(MdOutlineContactPhone)`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

export const HomeStyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 15px;
  font-size: 20px;
  color: black;
  &.active {
    color: #21aeeab5;
  }
`;
