import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { editDeck, removeDeck, createDeck } from "../../store/decks";
import { getDecksThatBelongToUser } from "../../store/users"

import { useParams } from "react-router-dom";

import {
    Box,
    Stack,
    Text,
    Button,
    Collapse,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalHeader,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,

} from "@chakra-ui/react"

import { FaRegEdit } from "react-icons/fa"

function Deck({deck, setIsLoading, isLoading}) {

    const { onClose, onOpen, isOpen } = useDisclosure()
    const [show, setShow] = useState()

    const [deckName, setDeckName] = useState("")
    const [category, setCategory] = useState("")

    const dispatch = useDispatch()

    const handleToggle = () => setShow(!show);

    console.log("TESTING THE ID", deck.id);

    const onDelete = async () => {
        if (!deck) {
            return
        }
        // console.log(deck.id)
        await dispatch(removeDeck(deck?.id))
        setIsLoading(!isLoading)
        setShow(!show)
    }

    const { id } = useParams()

    const updateDeck = async (e) => {
        e.preventDefault()


        const formData = {
            userId: id
        }
        if (deckName.length !== 0) formData.deckName = deckName
        if (category.length !== 0) formData.category = category
        await dispatch(editDeck(deck.id, formData))
        setIsLoading(!isLoading)
        onClose()
        setShow(!show)
    }

    return (
    <>

        {/* //? Edit deck modal: */}
        <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Edit a deck</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                        <form onSubmit={updateDeck}>
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


                            <Button margin="5px" colorScheme="purple" onClick={updateDeck}>Edit</Button>
                            <Button onClick={onClose} margin="5px" colorScheme="red">I've changed my mind.</Button>
                        </form>
                </ModalBody>
                </ModalContent>
            </Modal>


        {/* //? Collapse with the two buttons */}
        <Stack align="center" justify="space-evenly" margin={20}>
        <Collapse startingHeight={0}
        in={show}
        >
      <Box
      p="20px"
          color="white"
          mt="16"
          bg="whiteAlpha.300"
          border="3px solid black"
          rounded="md"
          shadow="lg"
      >
      <Stack w="100%">
        <Button colorScheme="blue" onClick={onOpen}>Edit a deck</Button>
        <Button colorScheme="red" onClick={onDelete}>Delete a deck</Button>
        </Stack>
        </Box>
      </Collapse>
      <Button size="sm"
      onClick={handleToggle}
      mt="1rem"
      colorScheme="twitter"
      pos="relative"
      left="25%"><FaRegEdit fontSize={'20px'} />

      </Button>

            <Box
            w="125px"
            h="200px"
            border="5px solid black"
            borderRadius={10}
            className="card bgColor-smaller"
            >
                <Text fontSize="1.5rem" color="black" textAlign="center">
                    {deck.deckName}
                </Text>
                <hr />
                <Text  fontSize="1rem" color="black" textAlign="center">
                    {
                        deck.category ?
                            deck.category
                            :
                            null
                    }
                </Text>
             </Box>
        </Stack>
    </>
    )
}

export default Deck
