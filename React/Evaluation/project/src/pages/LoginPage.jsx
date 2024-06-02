import React, { useContext, useState } from 'react'
import { Input } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import AuthContext from '../context/AuthContext'
const LoginPage = () => {
const {isAuthenticated,login,logout}=useContext(AuthContext)
const [email,setEmail]=useState("");
const [password,setPasword]=useState("");
const [error,setError]=useState("")

const handelLogin=async ()=>{
  console.log("clicked")
  const response = await fetch ('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login',{
    method:"post",
    headers:{
      'Content-Type':"application/json",
    },
    body : JSON.stringify({email,password}),
  })
  const data = await response.json()
  if(response.ok){
    login(data.token,email);
  }
  else{
    setError("An Error ocurred, Please try again")
  }
}
const handelLogout=()=>{
  logout();
}
  return (
    <>
    <Box>
      <Text> 
        {isAuthenticated ? "Logged In" : "Logged Out"}
      </Text>
      {error && <Text>{error}</Text>}
      {isAuthenticated ? (<Button onClick={handelLogout}>Logout</Button>) : (

        
        <Stack spacing={5} margin={5} >
     <Input
        pr='4.5rem'
        type= 'Text'
        value ={email}
        onChange={(e)=>
setEmail(e.target.value)}
placeholder='Enter email'
        />
      <Input
        pr='4.5rem'
        type= 'password'
        value={password}
        onChange={(e)=>
          setPasword(e.target.value)
        }
        placeholder='Enter password'
        />
        <Button colorScheme='teal' variant='outline' onClick={handelLogin}>
    Login
  </Button>
        </Stack>
      )}
        </Box>
        </>
    
  )
}

export default LoginPage