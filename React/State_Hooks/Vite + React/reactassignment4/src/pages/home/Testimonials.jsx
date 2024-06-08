import React from 'react';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';

const Testimonials = () => {
  return (
    <Box py={10} textAlign="center">
      <Heading as="h2" size="xl" mb={8}>What they say</Heading>
      <VStack spacing={4} maxW="800px" mx="auto">
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontWeight="bold">Jane - July 1, 2022</Text>
          <Text>Great service! The team really knows their stuff and helped us find the perfect location for our cannabis club.</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontWeight="bold">John - June 15, 2022</Text>
          <Text>Highly recommend! They made the permit process a breeze and provided valuable insights on branding and compliance.</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontWeight="bold">Jack - June 1, 2022</Text>
          <Text>Excellent experience from start to finish. They're a trusted partner for anyone looking to start or expand a cannabis business.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Testimonials;
