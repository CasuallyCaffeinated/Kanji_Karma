import React from 'react'

import LoginForm from "./LoginForm"

import { Box, Flex, Heading } from "@chakra-ui/react"


function LoginPage() {
    return (
        <>
            <Flex
            w="100vw"
            h="100vh"
            className="flex-container"
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
                    Log In!
                    </Heading>
                </Box>

                <Box
                w="20%"
                h="50%"
                border="5px solid black"
                padding={5}
                borderRadius="2xl"
                marginY="10px"
                bgColor="gray.50"
                >
                    <LoginForm />
                </Box>

            </Flex>
        </>
    )
}

export default LoginPage
