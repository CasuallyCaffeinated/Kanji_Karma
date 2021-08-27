import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { login } from "../../store/session";
import { useDispatch} from "react-redux";
import { Flex, Box, Stack, Heading, Button, Image } from "@chakra-ui/react";

import "./sp.css";

function Splashpage() {

    const history = useHistory();
    const dispatch = useDispatch();

    const demoUserPageLoader = async () => {
        dispatch(login('demo@aa.io', 'password')).then(res => history.push(`/profile/${res}`))
    }

    return (
        <Flex
        width="100vw"
        px={8}
        marginY="10%"
        className="main-container"
        justifyContent="space-evenly"
        align="left"
        overflowY="hidden"
        >
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

            <Stack
            direction="row"
            >
                 <Button
            onClick={demoUserPageLoader}
            bgColor="orange.100"
            color="blackAlpha.800"
            borderRadius="8px"
            w="52%"
            p="10px"
            size="md"
            lineHeight="1.5"
            _hover={{ backgroundColor: "orange.200" }}
            >
                Demo User Login!
            </Button>

            <Link to="/sign-up">
                <Button
                bgColor="purple.100"
                color="blackAlpha.800"
                borderRadius="8px"
                p="10px"
                size="md"
                lineHeight="1.5"
                _hover={{ backgroundColor: "purple.200" }}
                >
                    New To Kanji Karma? Sign Up!
                </Button>
            </Link>
            </Stack>

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
