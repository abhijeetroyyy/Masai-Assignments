import React, { useState } from 'react';
import { Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useToast } from '@chakra-ui/react';

const AddToCartButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toast = useToast();
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const handleConfirm = () => {
    toast({
      title: 'Item added to cart.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Button colorScheme="teal" onClick={() => setIsOpen(true)}>Add to Cart</Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
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
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="teal" onClick={handleConfirm} ml={3}>
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default AddToCartButton;
