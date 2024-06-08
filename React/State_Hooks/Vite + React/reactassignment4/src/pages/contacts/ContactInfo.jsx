import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const ContactInfo = () => {
  return (
    <Box py={10} bg="gray.100">
      <VStack spacing={4} maxW="600px" mx="auto" textAlign="center">
        <Heading as="h2" size="xl">Contact Information</Heading>
        <Text>Address: 1234 Masai Lane, Bangalore, India</Text>
        <Text>Email: contact@masaischool.com</Text>
        <Text>Phone: +91 1234567890</Text>
        <Text>Working Hours: Monday to Friday, 9:00 AM to 6:00 PM</Text>
      </VStack>
    </Box>
  );
};

export default ContactInfo;
