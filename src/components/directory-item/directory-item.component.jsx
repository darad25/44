import React, { useState, useEffect } from 'react';
import { Navbar, NavList, NavItem, Content } from './directory-item.styles';
import Jackets from '../jackets/jackets.component';
import Hats from '../hats/hats.component';
import Tshirt from '../tshirt/tshirt.component';

const DirectoryItem = () => {
    const [activeTab, setActiveTab] = useState('outerwear');
  
      // Array of tabs to cycle through
  const tabs = ['outerwear', 'hats', 'tshirt'];

  // Automatically switch tabs every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;  // Cycle through tabs
        return tabs[nextIndex];
      });
    }, 3000);  // Change tab every 3 seconds

    return () => clearInterval(interval);  // Clean up on component unmount
  }, [tabs]);

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <Navbar>
        <NavList>
          <NavItem 
            isActive={activeTab === 'outerwear'}
            onClick={() => handleTabClick('outerwear')}
          >
            JACKETS
          </NavItem>
  
          <NavItem 
            isActive={activeTab === 'hats'}
            onClick={() => handleTabClick('hats')}
          >
            HATS
          </NavItem>
  
          <NavItem 
            isActive={activeTab === 'tshirt'}
            onClick={() => handleTabClick('tshirt')}
          >
            T-SHIRT
          </NavItem>
        </NavList>
  
        <Content>
          {activeTab === 'outerwear' && <Jackets/>}
          {activeTab === 'hats' && <Hats/>}
          {activeTab === 'tshirt' && <Tshirt/>}
        </Content>
      </Navbar>
    );
  };
  
  export default DirectoryItem;


// import React, { useState, useEffect } from 'react';
// import { FirstImageContainer, SecondImageContainer } from './directory-item.styles';
// import  CrwnLogo from '../../assets/the25AI2.jpg';
// import  CrnLogo from '../../assets/the25AI5.webp';
// import { JoinwaitContainer, FashionContainer } from './directory-item.styles';

// const DirectoryItem = () => {
//   const [showFirstImage, setShowFirstImage] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowFirstImage(prevShowFirstImage => !prevShowFirstImage);
//     }, 3000); // Switch every 3 seconds

//     return () => clearInterval(interval); // Cleanup the interval on unmount
//   }, []);

//   return (
//     <div>
//       {showFirstImage ? (
//         <FirstImageContainer> 
//         {/* <img
//           src={CrwnLogo} 
//         /> */}
//         <JoinwaitContainer>  
//         JOIN THE WAITLIST
//         </JoinwaitContainer>
//         <FashionContainer>  
//         FASHION x  AI
//         </FashionContainer>
//         </FirstImageContainer>
//       ) : (
//         <SecondImageContainer>  
//         {/* <img
//           src={CrnLogo} 
//         /> */}
//          <JoinwaitContainer>  
//         JOIN THE WAITLIST
//         </JoinwaitContainer>
//         </SecondImageContainer>
//       )}
//     </div>
//   );
// }

// export default DirectoryItem;
