import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { editDeck, removeDeck, createDeck } from "../../store/decks";
import { getDecksThatBelongToUser } from "../../store/users"

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
    useDisclosure
} from "@chakra-ui/react"

import { FaRegEdit } from "react-icons/fa"

function Deck({deck, setIsLoading, isLoading}) {

    const { onClose, onOpen, isOpen, onToggle } = useDisclosure()
    const [show, setShow] = useState()


    const dispatch = useDispatch()

    const handleToggle = () => setShow(!show);

    console.log("TESTING THE ID", deck.id);

    const onDelete = async () => {
        if (!deck) {
            return
        }
        console.log(deck.id)
        await dispatch(removeDeck(deck?.id))
        setIsLoading(!isLoading)
        setShow(!show)
    }

    // useEffect(() => {

    // }, [dispatch, isLoading])

    return (
    <>

        {/* //? Edit deck modal: */}



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
        <Button colorScheme="blue">Edit a deck</Button>
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
            bgColor="red.600"
            >
                <Text fontSize="1.5rem" color="white" textAlign="center">
                    {deck.deckName}
                </Text>
                <hr />
                <Text  fontSize="1rem" color="white" textAlign="center">
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
