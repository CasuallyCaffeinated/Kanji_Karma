import React, {useEffect} from 'react'

import { useSelector, useDispatch } from "react-redux"

import { getCharsThatBelongToUser } from "../../store/users"

import { useParams } from "react-router-dom"

import { Box } from "@chakra-ui/react"

function CharacterInventory() {

    const dispatch = useDispatch()
    const userCharacters = useSelector(state => state.userReducer)

    const { id } = useParams()

    useEffect(() => {
        dispatch(getCharsThatBelongToUser(id))
    }, [dispatch, id])

    return (
        <Box
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
                >{ u_char ?
                u_char.characters.map(character => {
                    return <Box>{character?.kanjiCharacter}</Box>
                })
                :
                null
                }</Box>
                )
           }
       </Box>
       </Box>
    )
}

export default CharacterInventory
