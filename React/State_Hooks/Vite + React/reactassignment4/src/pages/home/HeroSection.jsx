import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box
      bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BjFcg6Sp0FkUslmmrCuWQQPFlTn0e23efg&s"
      bgSize="cover"
      color="white"
      textAlign="center"
      py={20}
    >
      <VStack spacing={4} maxW="600px" mx="auto">
        <Heading as="h1" size="2xl">We help cannabis clubs find real estate</Heading>
        <Text fontSize="xl">
          Founded by a former city planner and a cannabis industry pioneer, our team has decades of experience finding and permitting properties for cannabis businesses.
        </Text>
        <Button colorScheme="green">Learn more</Button>
        <Button colorScheme="blue">Sign up</Button>
      </VStack>
    </Box>
  );
};

export default HeroSection;
