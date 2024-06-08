import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

const NextStep = () => {
  return (
    <Box py={10} textAlign="center" bg="gray.100">
      <VStack spacing={4} maxW="800px" mx="auto">
        <Heading as="h2" size="xl">Ready to take the next step?</Heading>
        <Text>We'll help you find the perfect location for your cannabis club, navigate the complex web of regulations and permits, and provide guidance on everything from branding to compliance.</Text>
        <Button colorScheme="teal" size="lg">Schedule a free consultation</Button>
      </VStack>
    </Box>
  );
};

export default NextStep;
