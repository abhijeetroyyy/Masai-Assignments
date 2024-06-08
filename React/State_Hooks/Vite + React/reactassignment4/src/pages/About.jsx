import React from 'react';
import { Box, Heading, Text, Button, List, ListItem, ListIcon } from '@chakra-ui/react'; 
import { MdCheckCircle } from 'react-icons/md';

const About = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        About Masai School
      </Heading>
      <Text fontSize="lg" mb={4}>
        Masai School is a tech-focused educational institution committed to transforming lives by providing accessible, industry-relevant education.
      </Text>
      <Text fontSize="lg" mb={8}>
        Our mission is to democratize quality tech education and empower individuals from diverse backgrounds to pursue fulfilling careers in technology.
      </Text>
      <Heading as="h2" size="lg" mb={4}>
        Our Approach
      </Heading>
      <Text fontSize="lg" mb={8}>
        At Masai School, we believe in hands-on, project-based learning. Our curriculum is designed to equip students with practical skills and real-world experience, ensuring they are job-ready upon graduation.
      </Text>
      <Heading as="h2" size="lg" mb={4}>
        Why Choose Masai School?
      </Heading>
      <List spacing={3} mb={8}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Industry-Relevant Curriculum
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Dedicated Mentors and Instructors
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Career Support Services
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Vibrant Community and Networking Opportunities
        </ListItem>
      </List>
      <Heading as="h2" size="lg" mb={4}>
        Our Programs
      </Heading>
      <Text fontSize="lg" mb={8}>
        Masai School offers a range of immersive programs tailored to meet the demands of the tech industry, including Full Stack Web Development, Android Development, Data Science and Machine Learning, and Cybersecurity.
      </Text>
      <Button colorScheme="blue">Learn More</Button>
    </Box>
  );
};

export default About;
