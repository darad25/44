import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components for layout
const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 1s ease-in-out;
  transform: ${({ currentSlide }) => `translateX(-${currentSlide * 100}%)`};
  width: 100%;
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
`;

const Preview = styled.div`
  position: absolute;
  top: 0;
  width: 25%;
  height: 100%;
  opacity: 0.5;
  transition: opacity 0.3s ease;
`;

const PreviewLeft = styled(Preview)`
  left: -35%;  /* Moves preview away from the center image */
  transform: translateX(0);
`;

const PreviewRight = styled(Preview)`
  right: -35%;  /* Moves preview away from the center image */
  transform: translateX(0);
`;

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: 'https://via.placeholder.com/1000x500/0000FF/808080?text=Image+1',
      text: 'Fashion with a Conscience - Lasting clothes, less waste.',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/1000x500/FF0000/FFFFFF?text=Image+2',
      text: 'Designed with Purpose - Thoughtful choices for the planet.',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/1000x500/00FF00/000000?text=Image+3',
      text: 'Sustainable Style - Fashion meets sustainability.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Slide changes every 4 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  const nextSlide = (currentSlide + 1) % slides.length;

  return (
    <CarouselContainer>
      {/* Main Slides */}
      <SlideContainer currentSlide={currentSlide}>
        {slides.map((slide, index) => (
          <Slide key={slide.id}>
            <Image src={slide.image} alt={`Slide ${index + 1}`} />
            <OverlayText>{slide.text}</OverlayText>
          </Slide>
        ))}
      </SlideContainer>

      {/* Left and right previews */}
      <PreviewLeft>
        <img src={slides[prevSlide].image} alt="Previous Slide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </PreviewLeft>
      <PreviewRight>
        <img src={slides[nextSlide].image} alt="Next Slide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </PreviewRight>
    </CarouselContainer>
  );
};

export default Carousel;
