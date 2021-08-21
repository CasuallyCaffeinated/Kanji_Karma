import React, {useEffect} from 'react'

import { useSelector, useDispatch } from "react-redux"

import { getCharsThatBelongToUser } from "../../store/users"
import { getAllDecks } from "../../store/decks"

import { useParams } from "react-router-dom"

import { Box, Flex } from "@chakra-ui/react"

import Character from "./Character"

function CharacterInventory() {

    const dispatch = useDispatch()
    const userCharacters = useSelector(state => state.userReducer)

    const { id } = useParams()

    useEffect(() => {
        dispatch(getCharsThatBelongToUser(id))
        dispatch(getAllDecks())
    }, [dispatch, id])

    return (
    <>
        <Flex
        w="100vw"
        h="auto"
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
                        userCharacters ?
                    Object.values(userCharacters).map((userChar,idx) =>
                        <Flex
                        justify="space-evenly"
                        align="center"
                        flexWrap="wrap"
                        key={idx}
                        >{userChar?.characters?.map(character => {
                            return <Character key={character.id} character={character} />
                        })}</Flex>
                        )
                        :
                        null
                }
                </Box>
            </Flex>
        </Flex>
    </>
    )
}

export default CharacterInventory
