import React from 'react'
import { Link } from "react-router-dom"
import { Flex, Box, Stack, Heading, Button, Image } from "@chakra-ui/react"

import "./sp.css";

function Splashpage() {
    return (
        <Flex minH="70vh"
        width="100vw"
        px={8}
        marginY="5%"
        className="main-container"
        justifyContent="space-evenly"
        align="left">
            <Stack
            spacing={4}
            w="50%"
            align="left"
            border="2px solid black"
            borderRadius="lg"
            h="50%"
            p="3%"
            >
            <Heading
            size="lg"
            fontWeight="bold"
            textAlign="left"
            className="heading one"
            >
                Welcome to Kanji Karma!
            </Heading>

            <Heading
            size="md"
            className="jp-welcome"
            fontWeight="bold"
            lineHeight="1"
            textAlign="left"
            >
                「漢字カルマ」へようこそ！
            </Heading>

            <Heading
            size="sm"
            fontWeight="bold"
            lineHeight="1.5"
            textAlign="left"
            className="informational hero"
             >
                Learn all of the Jōyō characters found in Japanese（常用漢字）
                as well as a slew of useful vocabulary terms
                if you ever plan on visiting Japan!
                All this and more with the help of Kanji Karma!
            </Heading>
            <Link to="/sign-up">
                <Button
                bgColor="purple.100"
                borderRadius="8px"
                p="8px"
                size="md"
                lineHeight="1.5"
                >
                    New to Kanji Karma? Sign Up!
                </Button>
            </Link>
            </Stack>
            <Box
            w="60%"
            marginX="10%"
            >
                <Image
                src="https://media.discordapp.net/attachments/716919293270556702/851290483459227708/tumblr_036708cff153a39fc1342da260cbd384_7d73dffc_2048.jpg?width=702&height=400"
                size="100%"
                rounded="1rem"
                boxShadow="3xl"
                alt="homepage image"
                >

                </Image>
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
