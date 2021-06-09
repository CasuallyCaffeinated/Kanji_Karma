import React, {useEffect} from 'react'

import { useSelector, useDispatch } from "react-redux"

import { getCharsThatBelongToUser } from "../../store/users"

import { useParams } from "react-router-dom"

import { Box, Flex, Heading } from "@chakra-ui/react"

import Character from "./Character"

function CharacterInventory() {

    const dispatch = useDispatch()
    const userCharacters = useSelector(state => state.userReducer)

    const { id } = useParams()

    useEffect(() => {
        dispatch(getCharsThatBelongToUser(id))
    }, [dispatch, id])

    return (
    <>
        <Flex
        w="100vw"
        h="auto"
        // bgColor="purple.50"
        align="center"
        justify="center"
        marginY="5%"
        >
            <Flex
            w="100%"
            h="auto"
            bgColor="whiteAlpha"
            align="center"
            justify="space-evenly"
            direction="column"
            >
                <Box
                marginBottom={8}
                className="inventory-pg-intro-msg"
                >Inventory Page</Box>

                <Box
                paddingTop="10px"
                borderTop="5px solid black"
                >
                    {
                    Object.values(userCharacters).map(userChar =>
                        <Flex
                        justify="space-evenly"
                        align="center"
                        flexWrap="wrap"
                        >{userChar?.characters.map(character => {
                            // return <Box>{character.kanjiCharacter}</Box>
                            return <Character key={character.id} character={character} />
                        })}</Flex>
                        )
                }
                </Box>
            </Flex>
        </Flex>
    </>
    )
}

export default CharacterInventory

{/* <Box
        w="100vw"
        h="80vh"
        >
       <Box
       w="80%"
       h="200px"
       pos="relative"
       top="50%"
       left="20%"
       >
           {
               Object.values(userCharacters).map(u_char =>
                <Box
                pos="relative"
                top="30%"
                > { u_char ?
                u_char.characters.map(character => {
                    return <Box>{character?.kanjiCharacter}</Box>
                })
                :
                null
                }</Box>
                )
           }
       </Box>
       </Box>  */}
