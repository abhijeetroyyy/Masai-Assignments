import React from 'react';
import { Box, Heading, SimpleGrid, VStack, Text } from '@chakra-ui/react';

const HowWeHelp = () => {
  return (
    <Box py={10} textAlign="center">
      <Heading as="h2" size="xl" mb={8}>How we help</Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={10} maxW="800px" mx="auto">
        <VStack spacing={4} p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md">Find the perfect location</Heading>
          <Text>
            Our team will help you find the ideal location for your cannabis club, with a focus on foot traffic, visibility, and local demographics.
          </Text>
        </VStack>
        <VStack spacing={4} p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md">Get help with permits</Heading>
          <Text>
            Navigating the complex web of regulations and permits can be daunting. We'll help you understand the process and get it done right.
          </Text>
        </VStack>
        <VStack spacing={4} p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md">Work with experienced consultants</Heading>
          <Text>
            Our consultants have deep expertise in the cannabis industry and a track record of success. We'll provide guidance on everything from branding to compliance.
          </Text>
        </VStack>
        <VStack spacing={4} p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md">Get a free consultation</Heading>
          <Text>
            Ready to take the next step? Schedule a free consultation with our team and learn how we can help you achieve your goals.
          </Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default HowWeHelp;
