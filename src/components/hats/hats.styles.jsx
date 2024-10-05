import styled from 'styled-components';

// Styled components for the layout
export const CardGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Space between the cards */
  padding: 20px; /* Padding around the grid */
  margin-top: 40px; 
  `;

export const Card = styled.div`
  width: 400px;
  text-align: center;
  height: 600px;
`;

export const Image = styled.img`
  width: 100%;
  height: 520px;
  object-fit: cover;
  border-radius: 5px;
`;

export const ProductName = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

export const Collection = styled.p`
  font-size: 14px;
  color: gray;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
`;