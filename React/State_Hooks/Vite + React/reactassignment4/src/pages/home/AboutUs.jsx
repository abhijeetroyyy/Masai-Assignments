import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box py={10} textAlign="center">
      <Heading as="h2" size="xl" mb={8}>About us</Heading>
      <Text maxW="800px" mx="auto">
        Founded by a former city planner and a cannabis industry pioneer, our team has decades of experience finding and permitting properties for cannabis businesses. We understand the unique challenges and opportunities of the cannabis industry, and we're here to help you succeed.
      </Text>
    </Box>
  );
};

export default AboutUs;
