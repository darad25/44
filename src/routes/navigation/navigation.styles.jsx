import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div` 
position: relative;   
height: 70px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 25px;
   bottom: 19px;


   @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
   }
`; 

export const LogoContainer = styled(Link)`
     height: 100%;
     width: 230px;
     padding: 25px;
     font-weight: bold;
     font-size: 2.25rem;
     font-family: 'Varela Round'; 
     padding-left: 10px;
     display: flex;               /* Flexbox layout */
  white-space: nowrap;         /* Prevent text from breaking into multiple lines */
     @media screen and (max-width: 800px) {
      width: 50px;
      padding: 0;
     }
`;

export const NavLink = styled.div`
  position: relative;
  padding: 10px 15px;
  cursor: pointer;
  display: flex;               /* Flexbox layout */
  justify-content: center;     /* Center text horizontally */
  align-items: center;         /* Align items vertically */
  white-space: nowrap;         /* Prevent text from breaking into multiple lines */
  text-align: center; 
  font-size: 1.3rem;
  left: 1200px;
  font-family: 'Varela Round';
  top: 7px;
  color: orange ;
`;

export const NavLin = styled(Link)`
  position: relative;
  cursor: pointer;
  width: 100%;                 /* Use 100% width or adjust as needed */
  top: 50px;
  font-size: 2rem;
  left: 710px;
  font-family: 'Varela Round';
  display: flex;               /* Flexbox layout */
  justify-content: center;     /* Center text horizontally */
  align-items: center;         /* Align items vertically */
  white-space: nowrap;         /* Prevent text from breaking into multiple lines */
  text-align: center;          /* Center the text if needed */
`;

export const NavLi = styled.div`
  position: relative;
  cursor: pointer;
  top: 110px;
  font-size: 2rem;
  font-family: 'Varela Round';
  width: 150%;            /* Full width */
  right: 36px;
   flex-direction: column;
    text-align:  right;  
    line-height: 1.6;  
`;