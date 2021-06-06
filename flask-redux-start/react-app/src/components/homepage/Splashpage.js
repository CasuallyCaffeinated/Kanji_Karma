import React from 'react'
import { Flex, Box } from "@chakra-ui/react"

import "./sp.css";

function Splashpage() {
    return (
        <Flex height="100vh"
        width="100vw"
        className="main-container"
        justify="center"
        align="center">
                <Flex
                justify="center"
                align="center"
                background="gray.100"
                w="100px"
                h="100px">
                        <Box>
                            Test message
                        </Box>
                </Flex>
        </Flex>
    )
}

export default Splashpage
