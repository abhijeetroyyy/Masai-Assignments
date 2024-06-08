import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Select,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import TicketCard from "../component/TicketCard";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

const Tickets = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(false);
  const [sortOrder, setSortOrder] = useState(""); // State for sorting
  const [filterStatus, setFilterStatus] = useState(""); // State for filtering

  async function fetchAndUpdateData() {
    setLoading(true);
    setError(false); // Reset error state
    try {
      let response = await axios.get("http://localhost:3000/tickets");
      let data = response?.data;
      setLoading(false);
      // Ensure data is an array
      if (Array.isArray(data)) {
        setTickets(data);
      } else {
        // If data is not in the expected format, set tickets to an empty array
        setTickets([]);
        setError(true);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const applySortAndFilter = (tickets) => {
    let filteredTickets = tickets;

    if (filterStatus) {
      filteredTickets = filteredTickets.filter(ticket => ticket.status.toLowerCase() === filterStatus.toLowerCase());
    }

    if (sortOrder) {
      filteredTickets = filteredTickets.sort((a, b) => {
        if (sortOrder === "low-to-high") {
          return a.priority - b.priority; // Numeric comparison for priorities
        } else if (sortOrder === "high-to-low") {
          return b.priority - a.priority; // Numeric comparison for priorities
        }
        return 0;
      });
    }

    return filteredTickets;
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  const sortedAndFilteredTickets = applySortAndFilter(tickets);

  return (
    <Container maxW="container.xl" mt="8">
      <Flex direction="column" align="center">
        <Heading mb="8">Tickets</Heading>
        <Button
          variant="outline"
          colorScheme="pink"
          onClick={() => {
            navigate("/tickets/create");
          }}
        >
          Create Ticket
        </Button>
        <Flex mt="4" w="full" justify="space-between" gap="4">
          <Select placeholder="Sort by Priority" onChange={handleSortChange}>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </Select>
          <Select placeholder="Filter by Status" onChange={handleFilterChange}>
            <option value="Pending">Pending</option>
            <option value="in progress">Progress</option>
            <option value="Completed">Completed</option>
          </Select>
        </Flex>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt="8">
        {sortedAndFilteredTickets.map(ticket => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Tickets;
