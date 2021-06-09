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
        h="100vh"
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
                    h="45%"
                    bgColor="purple.200"
                    border="3px solid black"
                    borderRadius={10}
                    align="center"
                    justify="center"
                    >
                        <Box>
                            <Button colorScheme="blackAlpha" onClick={handleClick} >To main inventory</Button>
                        </Box>
                    </Flex>
                </Flex>


                <Flex className="div2">TBA LINK TO DECKS</Flex>


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
