import React from 'react';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';

const FAQ = () => {
  return (
    <Box py={10} textAlign="center" bg="gray.50">
      <Heading as="h2" size="xl" mb={8}>Frequently asked questions</Heading>
      <VStack spacing={4} maxW="800px" mx="auto">
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md">How can you help me find a location for my cannabis club?</Heading>
          <Text>
            Our team will help you find the ideal location for your cannabis club, with a focus on foot traffic, visibility, and local demographics. We'll start by getting to know your brand, target audience, and business objectives.
          </Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md">What is the process for obtaining permits for a cannabis club?</Heading>
          <Text>
            Our consultants have deep expertise in the cannabis industry and a track record of success. We'll provide guidance on everything from branding to compliance.
          </Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md">Do you provide consulting services for cannabis businesses?</Heading>
          <Text>
            Our experienced consultants provide a range of services from location scouting to compliance advice.
          </Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md">How much does it cost to work with you?</Heading>
          <Text>
            Our pricing varies based on the services required. Contact us for a detailed quote tailored to your needs.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default FAQ;
