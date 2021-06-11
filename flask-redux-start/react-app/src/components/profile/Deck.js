import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { editDeck, removeDeck } from "../../store/decks";

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

function Deck({deck}) {

    const { onClose, onOpen, isOpen, onToggle } = useDisclosure()
    const [show, setShow] = useState()

    const dispatch = useDispatch()

    const handleToggle = () => setShow(!show);

    return (
    <>






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
        <Button colorScheme="blue">Edit</Button>
        <Button colorScheme="red">Delete</Button>
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
