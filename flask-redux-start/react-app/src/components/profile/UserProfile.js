import React from 'react'
import { Flex, Box, Button } from "@chakra-ui/react"

import { useDispatch, useSelector } from "react-redux"

import { useParams, useHistory } from "react-router-dom"



import "./profile.css";

function UserProfile() {

    const user = useSelector(state => state.session.user)

    const { id } = useParams()

    const history = useHistory()

    const handleClick = () => {
        history.push(`/me/${id}/inventory`)
    }

    return (
        <Flex
        w="100vw"
        h="90vh"
        className="flex-container-2"

        >
            <Box className="parent"
            w="100%"
            h="100%"
            >
                <Flex className="div1"
                justify="center"
                align="center"

                >
                    <Flex
                    w="65%"
                    h="55%"
                    bgColor="purple.200"
                    border="3px solid black"
                    borderRadius={10}
                    align="center"
                    justify="center"
                    direction="column"
                    >
                        <Box className="inventory-msg">My inventory</Box>
                        <Box>
                            <Button colorScheme="blackAlpha" onClick={handleClick} >Inventory</Button>
                        </Box>
                        <Box className="inventory-msg-2">私の目録</Box>
                    </Flex>
                </Flex>


                <Flex className="div2"
                justify="center"
                align="center"
                >
                    <Flex
                    w="65%"
                    h="55%"
                    bgColor="purple.200"
                    border="3px solid black"
                    borderRadius={10}
                    align="center"
                    justify="center"
                    direction="column"
                    >
                        <Box className="inventory-msg">My Decks</Box>
                        <Box>
                            <Button colorScheme="blackAlpha" onClick={handleClick}>Decks</Button>
                        </Box>
                        <Box className="inventory-msg-2">私の山札</Box>
                    </Flex>
                </Flex>


                <Flex className="div3"
                pos="relative"
                top="50%"
                h="50%"
                justify="center"
                align="center"
                >
                    <Flex
                    w="80%"
                    h="100%"
                    align="center"
                    justify="center"
                    className='profile-header'
                    >
                        <Box>Welcome to your profile {user && user.name ? user?.name : user?.username}</Box>
                    </Flex>
                </Flex>


                <Flex className="div4"
                 pos="relative"
                 bottom="0%"
                 h="50%"
                 justify="center"
                align="center"
                >
                    <Flex
                    w="80%"
                    h="100%"
                    align="center"
                    justify="center"
                    className='profile-header-2'
                    >
                        <Box>「{user && user.name ? user?.name : user?.username}」のプロフィールへようこそ！</Box>
                    </Flex>

                </Flex>
            </Box>
        </Flex>
    )
}

export default UserProfile
