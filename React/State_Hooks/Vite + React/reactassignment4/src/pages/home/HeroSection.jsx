import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box
      bgImage="https://www.shutterstock.com/image-vector/beautiful-mountains-landscape-blue-gradient-260nw-2205396015.jpg"
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
