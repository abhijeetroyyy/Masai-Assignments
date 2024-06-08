import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box py={4} textAlign="center" borderTop="1px" borderColor="gray.200">
      <Text>
        &copy; {new Date().getFullYear()} Masai School. All rights reserved.
      </Text>
      <Text>
        <Link href="/privacy-policy" color="blue.500">Privacy Policy</Link> | <Link href="/terms-of-service" color="blue.500">Terms of Service</Link>
      </Text>
    </Box>
  );
};

export default Footer;
