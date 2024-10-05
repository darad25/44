import React from 'react';
import { CardGrid, Card, Image, ProductName, Collection, Price } from './hats.styles';

const ProductCard = ({ image, name, collection, price }) => (
  <Card>
    <Image src={image} alt={name} />
    <ProductName>{name}</ProductName>
    <Collection>{collection}</Collection>
    <Price>USD {price}</Price>
  </Card>
);

const Hats = () => {
  return (
    <CardGrid>
      <ProductCard 
        image="https://i.ibb.co/ZYW3VTp/brown-brim.png"
        name="BROWN BRIM"
        collection="Summer Collection"
        price="75.00"
      />
      <ProductCard 
        image="https://i.ibb.co/ypkgK0X/blue-beanie.png"
        name="BLUE BEANIE"
        collection="Winter Collection"
        price="35.00"
      />
      <ProductCard 
        image="https://i.ibb.co/QdJwgmp/brown-cowboy.png"
        name="BROWN COWBOY"
        collection="Summer Collection"
        price="90.00"
      />
      <ProductCard 
        image="https://i.ibb.co/RjBLWxB/grey-brim.png"
        name="GREY BRIM"
        collection="Summer Collection"
        price="55.60"
      />
    </CardGrid>
  );
};

export default Hats;
