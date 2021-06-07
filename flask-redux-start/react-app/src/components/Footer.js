import React from 'react'
import { Flex, Box, Stack } from "@chakra-ui/react"

import "./homepage/sp.css"

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
                   w="60%">
            <Stack
               direction="row"
               p="30px"
               bgColor="whiteAlpha.600"
               >
                   <Box>Logo</Box>
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
