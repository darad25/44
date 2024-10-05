// Styled components
import styled from 'styled-components';

export const Navbar = styled.nav`
     font-family: 'Varela Round';

`;

export const NavList = styled.ul`
  list-style: none;
  padding: 15px;
  display: flex;
`;

export const NavItem = styled.li`
  margin-right: 80px;
  margin-top: 80px;

  cursor: pointer;
  color: ${({ isActive }) => (isActive ? 'orange' : 'gray')};
  font-size: 16px;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
`;

export const Content = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;