import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

const TicketEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignee: "",
    status: "Pending",
    priority: "0",
  });

  // Random names for assignees
  const assigneeNames = ["John", "Emma", "Michael", "Sophia", "William"];

  // Fetch the ticket details
  useEffect(() => {
    const fetchTicket = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(`http://localhost:3000/tickets/${id}`);
        const data = response.data;
        setFormData({
          title: data.title,
          description: data.description,
          assignee: data.assignee,
          status: data.status,
          priority: data.priority.toString(),
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching ticket:", error);
        setLoading(false);
        setError(true);
      }
    };

    fetchTicket();
  }, [id]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make PUT request to update the ticket
      await axios.put(`http://localhost:3000/tickets/${id}`, formData);
      // Redirect to Tickets page upon successful update
      navigate("/tickets");
    } catch (error) {
      console.error("Error updating ticket:", error);
    }
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <Container maxW="container.md" mt="8">
      <Heading mb="4">Edit Ticket</Heading>
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
              Edit Ticket
            </Button>
          </Flex>
        </form>
      </Box>
    </Container>
  );
};

export default TicketEdit;
