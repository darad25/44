import React from 'react';
import { CardGrid, Card, Image, ProductName, Collection, Price } from './tshirt.styles';

const ProductCard = ({ image, name, collection, price }) => (
  <Card>
    <Image src={image} alt={name} />
    <ProductName>{name}</ProductName>
    <Collection>{collection}</Collection>
    <Price>USD {price}</Price>
  </Card>
);

const Tshirt = () => {
  return (
    <CardGrid>
      <ProductCard 
        image="https://i.ibb.co/xJS0T3Y/camo-vest.png"
        name="CAMO DOWN"
        collection="Winter Collection"
        price="75.00"
      />
      <ProductCard 
        image="https://i.ibb.co/qMQ75QZ/floral-shirt.png"
        name="FLORAL T-SHIRT"
        collection="Summer Collection"
        price="35.00"
      />
      <ProductCard 
        image="https://i.ibb.co/55z32tw/long-sleeve.png"
        name="BLACK AND WHITE LONGSLEEVE"
        collection="Summer Collection"
        price="90.00"
      />
      <ProductCard 
        image="https://i.ibb.co/RvwnBL8/pink-shirt.png"
        name="PINK T-SHIRT"
        collection="Winter Collection"
        price="55.60"
      />
    </CardGrid>
  );
};

export default Tshirt;
