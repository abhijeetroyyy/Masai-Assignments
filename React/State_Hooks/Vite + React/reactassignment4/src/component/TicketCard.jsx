import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  Text,
  StackDivider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function TicketCard({ ticket }) {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <Heading size="md">{ticket.title}</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          
          <Box>
            <Heading size="xs" textTransform="uppercase" color="gray.600">
              Status
            </Heading>
            <Text pt="2" fontSize="sm">
              {ticket.status}
            </Text>
          </Box>
          
          <Box>
            <Heading size="xs" textTransform="uppercase" color="gray.600">
              Priority
            </Heading>
            <Text pt="2" fontSize="sm">
              {ticket.priority}
            </Text>
          </Box>
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={() => {
                  navigate(`/tickets/view/${ticket.id}`);
                }}
              >
                View
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default TicketCard;
