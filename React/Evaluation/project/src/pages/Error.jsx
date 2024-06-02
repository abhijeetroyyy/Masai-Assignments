import React from 'react';
import { Alert, AlertIcon, Center } from '@chakra-ui/react';

const Error = ({ message }) => (
  <Center height="100vh">
    <Alert status="error">
      <AlertIcon />
      {message}
    </Alert>
  </Center>
);

export default Error;
