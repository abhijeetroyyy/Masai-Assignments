import React from 'react';
import { Box, Heading, SimpleGrid, VStack, Text } from '@chakra-ui/react';

const LatestNews = () => {
  return (
    <Box py={10} textAlign="center">
      <Heading as="h2" size="xl" mb={8}>Latest news</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={10} maxW="1200px" mx="auto">
        <VStack spacing={4} p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md">How to choose a location for your cannabis club</Heading>
          <Text>July 1, 2022 - 5 min read</Text>
          <Text>Read more</Text>
        </VStack>
        <VStack spacing={4} p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md">Navigating the permit process for cannabis clubs</Heading>
          <Text>June 15, 2022 - 7 min read</Text>
          <Text>Read more</Text>
        </VStack>
        <VStack spacing={4} p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md">Branding tips for cannabis businesses</Heading>
          <Text>June 1, 2022 - 6 min read</Text>
          <Text>Read more</Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default LatestNews;
