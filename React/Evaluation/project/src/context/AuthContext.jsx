import React from 'react'
import { createContext } from 'react'

const initialState ={
    isAuthenticated:false,
    token:null,
    email:null
}
const AuthContext = createContext(initialState)


export default AuthContext