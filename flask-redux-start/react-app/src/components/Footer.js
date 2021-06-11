import React from 'react'
import { Flex, Box, Stack, Button } from "@chakra-ui/react"

import "./homepage/sp.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub } from "react-icons/fa"


function Footer() {
    return (
        <>
        <Flex
        w="100%"
        h="60px"
        justify="center"
        align="space-around"
        pos="fixed"
        bottom="0"
        className="footer"
        >
            <Flex
                   align="center"
                   justify="center"
                   w="100%"
                   h="100%"
                   >
            <Stack
               direction="row"
               bgColor="whiteAlpha.900"
               pos="fixed"
               bottom="10px"
               >
                   <Box><FaGithub fontSize={'35px'}/></Box>
                   <Box>Logo</Box>
                   <Box>My name</Box>
                   <Box>Logo</Box>
                   <Box>Logo</Box>
               </Stack>
        </Flex>
        </Flex>

    </>
    )
}

export default Footer
