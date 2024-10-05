import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

// import CartIcon from '../../components/cart-icon/cart-icon.component'; 
// import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
// import { UserContext } from '../../contexts/user.context';
// import { CartContext } from '../../contexts/cart.context';

// import { signOutUser } from '../../utils/firebase/firebase.utils';

import {NavLi, NavLin, NavLink, NavLinks, NavigationContainer, LogoContainer} from './navigation.styles';

const Navigation = () => {
//   const { currentUser } = useContext(UserContext);
//    const { isCartOpen } = useContext(CartContext);

    return (
     <Fragment>
       <NavigationContainer>
          <LogoContainer to='/'>
            TREND MIRROR
          </LogoContainer>
    
         <NavLink to='/'>
         READY FOR ANYTHING         
            </NavLink> 

            <NavLin to='/'>
            Wherever you are shopping         
            </NavLin> 

            <NavLi to='/'>
            Try before you buy – see how your outfit fits online before you make the purchase!
            </NavLi>
            
       </NavigationContainer>
       <Outlet />
     </Fragment>
    );
  };

  export default Navigation; 