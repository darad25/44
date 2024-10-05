import React from 'react';
import { CardGrid, Card, Image, ProductName, Collection, Price } from './jackets.styles';

const ProductCard = ({ image, name, collection, price }) => (
  <Card>
    <Image src={image} alt={name} />
    <ProductName>{name}</ProductName>
    <Collection>{collection}</Collection>
    <Price>USD {price}</Price>
  </Card>
);

const Jackets = () => {
  return (
    <CardGrid>
      <ProductCard 
        image="https://i.ibb.co/XzcwL5s/black-shearling.png"
        name="MIDNIGHT PUFFER"
        collection="Winter Collection"
        price="75.00"
      />
      <ProductCard 
        image="https://i.ibb.co/mJS6vz0/blue-jean-jacket.png"
        name="CITRUS WINDBREAKER"
        collection="Summer Collection"
        price="35.00"
      />
      <ProductCard 
        image="https://i.ibb.co/N71k1ML/grey-jean-jacket.png"
        name="INSULATED FOREST PARKA"
        collection="Summer Collection"
        price="90.00"
      />
      <ProductCard 
        image="https://i.ibb.co/s96FpdP/brown-shearling.png"
        name="CLOUDY GREY PUFFER"
        collection="Winter Collection"
        price="55.60"
      />
    </CardGrid>
  );
};

export default Jackets;
