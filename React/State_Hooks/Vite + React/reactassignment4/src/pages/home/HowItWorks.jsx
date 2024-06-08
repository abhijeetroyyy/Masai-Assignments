import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const HowItWorks = () => {
  return (
    <Box py={10} textAlign="center" bg="gray.50">
      <Heading as="h2" size="xl" mb={8}>How it works</Heading>
      <Text maxW="800px" mx="auto">
        Our process is designed to help you navigate the complexities of finding and permitting properties for cannabis businesses. We'll start by getting to know your needs and goals, then work with you every step of the way to ensure a successful outcome.
      </Text>
    </Box>
  );
};

export default HowItWorks;
