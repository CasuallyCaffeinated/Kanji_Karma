import React from 'react'
import { Flex, Box } from "@chakra-ui/react"

import "./sp.css";

import "./sp.css";

function Splashpage() {
    return (
        <Flex height="100vh"
        width="100vw"
        className="main-container"
        justify="center"
        align="center">
            <Box
            w="100%"
            h="100%"
            bgColor="blackAlpha.300"
            className="grid-container"
            >
               <Box className="main1">TEST 1</Box>
               <Box className="main2">TEST 2 </Box>
            </Box>
        </Flex>
    )
}

export default Splashpage


// {/* <Flex
//                 justify="center"
//                 align="center"
//                 background="gray.100"
//                 w="50%"
//                 h="100%">
//                         Testing
//                 </Flex>
//                 <Flex
//                  justify="center"
//                  align="center"
//                  background="blue.200"
//                  w="50%"
//                  h="100%"
//                 >
//                     <Box
//                     h="25%"
//                     bgColor="black"
//                     color= "whiteAlpha.600"
//                     >
//                         Test 1
//                     </Box>
//                     <Box
//                     h="75%"
//                     bgColor="black"
//                     color= "whiteAlpha.600"
//                     >
//                         Test 2
//                     </Box>
//                 </Flex> */}
