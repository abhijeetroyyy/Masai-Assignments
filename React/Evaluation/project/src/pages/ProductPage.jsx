import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Image, Text, Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useToast } from '@chakra-ui/react';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const toast = useToast();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        console.log('Fetching product with ID:', id);
        const response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`);
        console.log('API Response:', response.data);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError('Failed to fetch product details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    setIsOpen(true);
  };

  const confirmAddToCart = () => {
    onClose();
    toast({
      title: 'Item added to cart',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={4} maxW="md" borderWidth={1} borderRadius="lg" overflow="hidden" boxShadow="lg">
      {loading && <Text>Loading...</Text>}
      {error && <Text color="red">{error}</Text>}
      {product && (
        <>
          <Image src={product.image} alt={product.title} />
          <Text fontSize="2xl">{product.title}</Text>
          <Text fontSize="lg">Brand: {product.brand}</Text>
          <Text fontSize="lg">Category: {product.category}</Text>
          <Text fontSize="lg">Price: ${product.price}</Text>
          <Button colorScheme="blue" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <AlertDialog isOpen={isOpen} onClose={onClose} leastDestructiveRef={cancelRef}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Add to Cart
                </AlertDialogHeader>
                <AlertDialogBody>
                  Are you sure you want to add this item to cart?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue" onClick={confirmAddToCart} ml={3}>
                    Confirm
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </>
      )}
    </Box>
  );
};

export default ProductPage;
