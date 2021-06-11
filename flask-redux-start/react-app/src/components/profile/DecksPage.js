import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDecksThatBelongToUser } from "../../store/users"
import { getAllDecks } from "../../store/decks"

import { Flex } from "@chakra-ui/react"

import Deck from "./Deck"

function DecksPage() {

    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer)
    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        dispatch(getDecksThatBelongToUser(id))
        dispatch(getAllDecks())
        // setIsLoading(true)
    }, [dispatch, isLoading])

    return (
        <Flex h="100vh" w="100vw" align="flex-start" justify="center" flexGrow="1">
            <Flex h="95%"
             w="90%"
             flexGrow="1"
             bgColor="blackAlpha.200"
             rounded="lg"
             align="center"
             justify="center"
             >
                 {
                     Object.values(user).map((singleUser, idx) =>
                     <Flex
                     justify="space-evenly"
                     align="center"
                     key={idx}
                     >
                        {
                            singleUser?.decks?.map((deck, index) => {
                                return <Deck key={index} deck={deck} setIsLoading={setIsLoading} isLoading={isLoading} />
                                // <Box margin="10px" key={index}>{deck.deckName}</Box> -- IT WORKS!
                            })
                        }
                     </Flex>
                     )
                 }
            </Flex>
        </Flex>
    )
}

export default DecksPage
