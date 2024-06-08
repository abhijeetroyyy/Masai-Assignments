import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login,authDetails:{isLoggedIn}, } = useContext(AuthContext);

  async function handleClick() {
    try {
      let resp = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password,
        },
      });
      console.log(resp.data);
      login(resp.data.token);
    } catch (error) {
      console.log(error);
    }
  }
  if (isLoggedIn){
    return <Navigate to="/"/>
  }

  return (
    <Container>
      <VStack spacing={6}>
        <Heading>Login Page</Heading>
        <Input
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button variant="outline" colorScheme="blue" onClick={handleClick}>
          Login
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;
