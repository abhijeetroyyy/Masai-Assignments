import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Link as ChakraLink, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
  const { authDetails, logout } = useContext(AuthContext);

  const links = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about",
      label: "About",
    },
    {
      to: "/contact",
      label: "Contact",
    },
    {
      to: "/tickets",
      label: "Tickets",
    },
  ];

  return (
    <>
      <Flex align="center" justify="space-around" p="20px" bg="aqua">
        {links.map((link) => (
          <ChakraLink
            _hover={{ textDecoration: "none" }}
            color="black"
            as={ReactRouterLink}
            to={link.to}
            key={link.to}
          >
            {link.label}
          </ChakraLink>
        ))}
        {!authDetails.isLoggedIn ? (
          <Button
            as={ReactRouterLink}
            to="/login"
            variant="outline"
            colorScheme="blue"
          >
            Login
          </Button>
        ) : (
          <Button variant="outline" colorScheme="red" onClick={logout}>
            Log Out
          </Button>
        )}
      </Flex>
    </>
  );
};

export default Navbar;
