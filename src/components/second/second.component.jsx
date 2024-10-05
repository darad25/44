import React from 'react';
import { PageContainer, ContentContainer, ImageContainer, LargeImage, OverlayText, Subtitle, ProductTitle, TextContainer, Title, Description, SmallImageContainer, SmallImage } from './second.styles';
import  CrwnLogo from '../../assets/longcoat.webp';
import  CrnLogo from '../../assets/smallpart1.jpg';


const Second = () => {
  return (
    <PageContainer>
      <ContentContainer>
        {/* Large Image with Overlay Text */}
        <ImageContainer>
          <LargeImage 
          src={CrwnLogo} 
         /> 
          <OverlayText>
            <Subtitle>Majestic Long Coat</Subtitle>
            <ProductTitle>by Trend Mirror®</ProductTitle>
          </OverlayText>
        </ImageContainer>

        {/* Text Content */}
        <TextContainer>
          <Title>About Trend Mirror®</Title>
          <Description>
            Everyday Comfort, Everyday Style. Creating clothing that perfectly fits into your daily routine.
            Whether you're heading to work, meeting friends, or relaxing at home, our collection is designed
            to keep you comfortable and stylish every day.
          </Description>
          {/* Small Image */}
          <SmallImageContainer>
            <SmallImage 
              src={CrnLogo} 
            />
          </SmallImageContainer>
        </TextContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default Second;
