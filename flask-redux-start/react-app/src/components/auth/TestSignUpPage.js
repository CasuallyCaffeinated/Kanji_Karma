import React from 'react'

import { Box } from "@chakra-ui/react"

import "./auth.css";

function TestSignUpPage() {
    return (
        <>
        <Box
            minH="70vh"
            w="100vw"
            className='grid-container'
        >

                <div className='SignUp'></div>
                <div className='InnerSignup'></div>
                <div className='Modal'></div>
        </Box>
        <div className='WelcomeMsg'></div>
        <div className='JPPic'></div>
        <div className='JPPic2'></div>
      </>
    )
}

export default TestSignUpPage
