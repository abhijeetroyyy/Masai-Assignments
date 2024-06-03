import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import HomePage from './HomePage';
import {
  Box,
  Text,
  Button,
  Image,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import Loading from './Loading';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const cancelRef = React.useRef();
  const toast = useToast();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`);
        setProduct(response.data.data); // Adjust based on the actual API response structure
      } catch (error) {
        setError('Failed to fetch product details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleAddToCart = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleConfirmAddToCart = () => {
    setIsDialogOpen(false);
    toast({
      title: 'Item added to cart',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  if (loading) return <Loading/>;
  if (error) return <Text color="red">{error}</Text>;
  if (!product) return <Text>No product found</Text>;

  return (
    <Box p={5} >
      <Box
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        alignContent="center"
        p={5}
      >
        <Image src={product.image} alt={product.title} />
        <Text fontSize="2xl" fontWeight="bold" mt={2}>{product.title}</Text>
        <Text mt={2}>Category: {product.category}</Text>
        <Text mt={2}>Price: ${product.price}</Text>
        <Text mt={2}>Description: {product.description}</Text>
        <Button mt={4} colorScheme="blue" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Box>
      <Link to="/">
        <Button mt={4} colorScheme="teal">Back to Home</Button>
      </Link>

      <AlertDialog
        isOpen={isDialogOpen}
        leastDestructiveRef={cancelRef}
        onClose={handleDialogClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Add to Cart
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to add this item to cart?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={handleDialogClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={handleConfirmAddToCart} ml={3}>
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default ProductPage;
