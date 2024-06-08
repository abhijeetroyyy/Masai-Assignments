import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box
      bgImage="https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg"
      bgSize="cover"
      color="white"
      textAlign="center"
      py={20}
    >
      <VStack spacing={4} maxW="600px" mx="auto">
        <Heading as="h1" size="2xl">Get in Touch</Heading>
        <Text fontSize="xl">
          Have questions? We're here to help. Reach out to us and we'll get back to you as soon as possible.
        </Text>
      </VStack>
    </Box>
  );
};

export default HeroSection;
