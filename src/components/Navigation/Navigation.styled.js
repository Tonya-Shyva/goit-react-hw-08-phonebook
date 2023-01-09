import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdOutlineContactPhone } from 'react-icons/md';

export const Header = styled.header`
  padding: 15px;
  color: #fff;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavigationWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
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
  font-size: 20px;
  color: black;
  &.active {
    color: rgb(200, 10, 10);
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  color: black;
  &.active {
    color: rgb(200, 10, 10);
  }
`;

export const AuthNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 160px;
`;
