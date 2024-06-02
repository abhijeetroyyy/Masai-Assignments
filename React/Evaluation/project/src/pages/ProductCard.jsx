import React from 'react';
import { Image, Text, VStack } from '@chakra-ui/react';
import AddCartButton from './AddCartButton';

const ProductCard = ({ product }) => {
  return (
    <VStack spacing={4}>
      <Image src={product.image} alt={product.title} />
      <Text fontSize="2xl">{product.title}</Text>
      <Text fontSize="lg">Brand: {product.brand}</Text>
      <Text fontSize="lg">Category: {product.category}</Text>
      <Text fontSize="lg">Price: ${product.price}</Text>
      <AddCartButton product={product} />
    </VStack>
  );
};

export default ProductCard;