import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";

const TicketCreate = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignee: "",
    status: "Pending",
    priority: "0",
  });

  // Random names for assignees
  const assigneeNames = ["John", "Emma", "Michael", "Sophia", "William"];

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to create new ticket
      await axios.post("http://localhost:3000/tickets", formData);
      // Redirect to Tickets page upon successful creation
      window.location.href = "/tickets";
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };

  return (
    <Container maxW="container.md" mt="8">
      <Heading mb="4">Create New Ticket</Heading>
      <Box borderWidth="1px" borderRadius="lg" p="4">
        <form onSubmit={handleSubmit}>
          <FormControl mb="4">
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Assignee</FormLabel>
            <Select
              name="assignee"
              value={formData.assignee}
              onChange={handleChange}
              required
            >
              <option value="">Select Assignee</option>
              {assigneeNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Status</FormLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="Pending">Pending</option>
              <option value="Progress">Progress</option>
              <option value="Completed">Completed</option>
            </Select>
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Priority</FormLabel>
            <Select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              required
            >
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index} value={index.toString()}>
                  {index}
                </option>
              ))}
            </Select>
          </FormControl>
          <Flex justify="flex-end">
            <Button type="submit" colorScheme="blue">
              Create Ticket
            </Button>
          </Flex>
        </form>
      </Box>
    </Container>
  );
};

export default TicketCreate;
