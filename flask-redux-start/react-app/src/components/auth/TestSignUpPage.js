import React from 'react'

import SignUpForm from "./SignUpForm"

import { Box, Flex, Heading } from "@chakra-ui/react"

import "./auth.css";

function TestSignUpPage() {
    return (
    <>
        <Flex
        w="100vw"
        h="100vh"
        className="flex-container"
        // bgColor="purple.50"
        direction="column"
        flex-wrap="nowrap"
        justify="center"
        align="center"
        >
             <Box
            w="500px"
            h="5%"
            textAlign="center"
            >
                <Heading
                size="lg"
                bold="normal"
                className="heading one"
                color="red.600"
                >
                Sign Up!
                </Heading>
            </Box>

            <Box
            w="20%"
            h="70%"
            border="5px solid black"
            padding={5}
            borderRadius="2xl"
            marginY="10px"
            bgColor="gray.50"
            // pos="relative"
            // bottom="10px"
            >
                <SignUpForm />
            </Box>

        </Flex>
    </>
    )
}

export default TestSignUpPage


// {/* <Box
//             minH="70vh"
//             w="100vw"
//             className='grid-container'
//         >

//                 <div className='SignUp'></div>
//                 <div className='InnerSignup'>Sign Up Modal goes here</div>
//                 <div className='Modal'> </div>
//         </Box>
//         <div className='WelcomeMsg'>Sign Up!</div>
//         <div className='JPPic'></div>
//         <div className='JPPic2'></div> */}
    //    {/* <Box
    //         w="35%"
    //         h="10%"
    //         // bgColor="gray.200"
    //         marginY="10px"
    //         // pos="relative"
    //         // bottom="4rem"
    //         textAlign="center"
    //         >
    //             {/* <Heading
    //                 size="lg"
    //                 fontWeight="bold"
    //                 className="heading one"
    //             >
    //                 Sign Up!
    //             </Heading> */}
    //         {/* </Box> */} */}
