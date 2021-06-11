import React, { useEffect } from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useOutsideClick,
    Button,
    Box,
    Stack,
    Text,
    Flex
 } from "@chakra-ui/react"

import { closeKanjiModal } from "../../store/search";

import { useSelector, useDispatch } from "react-redux";

function KanjiCharacterModal() {

    const { onClose, onOpen, isOpen } = useDisclosure()
    const dispatch = useDispatch()
    const modalStatus = useSelector(state => state.searchReducer.showKanji)
    const searchResults = useSelector(state => state.searchReducer.searchResults)

    console.log("SEARCH RESULTS", searchResults);

    useEffect(() => {
        if (modalStatus) {
            onOpen()
        } else {
            return null
        }

    }, [modalStatus])


    const handleClose = () => {
        dispatch(closeKanjiModal())
        onClose()
    }

    if (!searchResults) {
        return null
    }

    console.log("SEARCH V2", searchResults);

    return (
        <>
        {/* <Button onClick={onOpen}></Button> */}
        <Modal onClose={handleClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Kanji Search Result:</ModalHeader>
                <ModalBody>
        {searchResults ?


                <Box
          w="250px"
          h="375px"
          boxShadow="xl"
          rounded="lg"
        //   bgColor="blackAlpha.100"
          overflowY="auto"
          >
              <Box
              bgColor="red.600"
              >
                  <Text fontSize="4rem" color="whiteAlpha.800" textAlign="center">
                        {searchResults[0].kanjiCharacter}
                  </Text>
              </Box>

              <Box
              h="74.3%"
            //   bgColor="pink"
              >
                  <Stack
                  spacing="1rem"
                  textAlign="end"
                  padding={2}
                  >
                      {searchResults[0].grade ?
                    <Flex
                    justify="space-between"
                    >
                        <Text fontWeight="bold">Grade:</Text>
                        <Text fontWeight="bold">{searchResults[0].grade}</Text>
                    </Flex>
                    :
                    null
                    }


                    {searchResults[0].strokeCount ?
                    <Flex
                    justify="space-between"
                    >
                        <Text fontWeight="bold">Stroke count:</Text>
                        <Text fontWeight="bold">{searchResults[0].strokeCount}</Text>
                    </Flex>
                    :
                    null
                    }


                    {searchResults[0].jlpt ?
                    <Flex
                    justify="space-between"
                    >
                        <Text fontWeight="bold">JLPT:</Text>
                        <Text fontWeight="bold">{searchResults[0].jlpt}</Text>
                    </Flex>
                    :
                    null
                    }


                    {searchResults[0].heisigEn ?
                    <Flex
                    justify="space-between"
                    >
                        <Text fontWeight="bold">Heisig:</Text>
                        <Text fontWeight="bold">{searchResults[0].heisigEn}</Text>
                    </Flex>
                    :
                    null
                    }

                    {searchResults[0]?.meanings ?
                    <Flex
                    justify="space-between"
                    flexWrap="wrap"
                    >
                        <Text fontWeight="bold">Meanings:</Text>
                        <Text fontWeight="bold">{searchResults[0].meanings.split(",").join(", ")}</Text>
                    </Flex>
                    :
                    null
                    }


                    {searchResults[0]?.kunReadings ?
                    <Flex
                    justify="space-between"
                    flexWrap="wrap"
                    >
                        <Text fontWeight="bold">Kunyomi:</Text>
                        <Text fontWeight="bold">{searchResults[0].kunReadings.split(",").join(", ")}</Text>
                    </Flex>
                    :
                    null
                    }


                    {searchResults[0]?.onReadings ?
                    <Flex
                    justify="space-between"
                    flexWrap="wrap"
                    >
                        <Text fontWeight="bold">Onyomi:</Text>
                        <Text fontWeight="bold">{searchResults[0].onReadings.split(",").join(", ")}</Text>
                    </Flex>
                    :
                    null
                    }

                    {searchResults[0]?.nameReadings ?
                    <Flex
                    justify="space-between"
                    flexWrap="wrap"
                    >
                        <Text fontWeight="bold">Name reading:</Text>
                        <Text fontWeight="bold">{searchResults[0].nameReadings.split(",").join(", ")}</Text>
                    </Flex>
                    :
                    null
                    }


                    {searchResults[0].unicode ?
                    <Flex
                    justify="space-between"
                    >
                        <Text fontWeight="bold">Unicode:</Text>
                        <Text fontWeight="bold">{searchResults[0].unicode}</Text>
                    </Flex>
                    :
                    null
                    }
                  </Stack>
              </Box>
        </Box>
        :
        null
         }
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
}

export default KanjiCharacterModal
