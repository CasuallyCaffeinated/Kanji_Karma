import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDecksThatBelongToUser } from "../../store/users"
import { getAllDecks, createDeck } from "../../store/decks"

import {
    Button,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Box
} from "@chakra-ui/react"
import { BsPlusSquareFill } from "react-icons/bs"

import Deck from "./Deck"

function DecksPage() {

    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer)
    const { onClose, onOpen, isOpen } = useDisclosure()

    const [deckName, setDeckName] = useState("")
    const [category, setCategory] = useState("")
    const [loadingState, setLoadingState] = useState(false)

    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        dispatch(getDecksThatBelongToUser(id))
        dispatch(getAllDecks())
        // setIsLoading(true)
    }, [dispatch, isLoading, loadingState])

    const addDeckToProfile = (e) => {
            e.preventDefault()

            const formData = {
                deckName,
                category,
                userId: id
            }

            dispatch(createDeck(formData))
            setLoadingState(!loadingState)
            onClose()
    }

    return (
        <Flex h="100vh" w="100vw" align="flex-start" justify="center" flexGrow="1">

            <Flex h="95%"
             w="90%"
             flexGrow="1"
             bgColor="whitesmoke"
             rounded="lg"
             align="center"
             justify="center"
             >

                <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Add a deck</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                        <form onSubmit={addDeckToProfile}>
                            <FormControl isRequired>
                            <FormLabel>
                                Deck name
                            </FormLabel>
                            <Box>
                            <Input
                            type="text"
                            name="deckName"
                            onChange={(e) => setDeckName(e.target.value)}
                            value={deckName}
                            required={true}
                            >
                            </Input>
                            </Box>
                            </FormControl>


                            <FormControl>
                            <FormLabel>
                                Category
                            </FormLabel>
                            <Box>
                            <Input
                            type="text"
                            name="category"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            required={true}
                            >
                            </Input>
                            </Box>
                            </FormControl>


                            <Button margin="5px" colorScheme="twitter" onClick={addDeckToProfile}>Add</Button>
                            <Button onClick={onClose} margin="5px" colorScheme="red">I've changed my mind.</Button>
                        </form>
                </ModalBody>
                </ModalContent>
            </Modal>

                 <Button
                 pos="absolute"
                 zIndex="1"
                 bottom="650px"
                 left="100px"
                 border="3px solid black"
                 padding="20px"
                 colorScheme="green"
                 onClick={onOpen}
                 > <BsPlusSquareFill fontSize="20px" /> </Button>
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
