import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";

const TicketView = () => {
  const { id } = useParams(); // Get the ticket ID from URL params
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch ticket details from the server
  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/tickets/${id}`);
        setTicket(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching ticket:", error);
        setError("Error fetching ticket. Please try again later.");
        setLoading(false);
      }
    };

    fetchTicket();
  }, [id]);

  // Handle delete button click
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/tickets/${id}`);
      // Redirect to Tickets page after deletion
      navigate("/tickets");
    } catch (error) {
      console.error("Error deleting ticket:", error);
      setError("Error deleting ticket. Please try again later.");
    }
  };

  return (
    <Container maxW="container.md" mt="8">
      <Heading mb="4">Ticket Details</Heading>
      {loading && <Text>Loading ticket...</Text>}
      {error && <Text color="red.500">{error}</Text>}
      {ticket && (
        <Box borderWidth="1px" borderRadius="lg" p="4">
          <Stack spacing="4">
            <Text fontWeight="bold">Title: {ticket.title}</Text>
            <Text>Description: {ticket.description}</Text>
            <Text>Assignee: {ticket.assignee}</Text>
            <Text>Status: {ticket.status}</Text>
            <Text>Priority: {ticket.priority}</Text>
            <Flex justify="space-between">
              <Button colorScheme="blue" onClick={() => navigate(`/tickets/edit/${id}`)}>
                Edit
              </Button>
              <Button colorScheme="red" onClick={handleDelete}>
                Delete
              </Button>
            </Flex>
          </Stack>
        </Box>
      )}
    </Container>
  );
};

export default TicketView;
