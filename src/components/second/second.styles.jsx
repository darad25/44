import styled from 'styled-components';

// Styled components for the layout
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
  background-color: white;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`;

export const ImageContainer = styled.div`
  width: 60%;
  position: relative;
`;

export const LargeImage = styled.img`
  width: 100%;
  height: 830px;
  object-fit: cover;
    border-radius: 5px;

`;

export const SmallImageContainer = styled.div`
 position: relative;
  top: 350px;  
    left: 450px;
  width: 30%;
`;

export const SmallImage = styled.img`
  width: 150%;
  height: auto;
  object-fit: cover;
    border-radius: 5px;

`;

export const TextContainer = styled.div`
  width: 40%;
  padding-left: 20px;
`;

export const Title = styled.h2`
  position: relative;
  left: 90px;
  font-size: 24px;
  margin-bottom: 20px;
    font-family: 'Varela Round';

`;

export const Description = styled.p`
    position: relative;
  left: 90px;  
font-size: 16px;
  line-height: 1.6;
    font-family: 'Varela Round';

`;

export const OverlayText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: black;
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 34px;
  margin: 0;
    font-family: 'Varela Round';

`;

export const ProductTitle = styled.h2`
  font-size: 24px;
  margin-top: 5px;
    font-family: 'Varela Round';

`;