import React, { useEffect } from 'react'

import { Box, Stack, Text, Flex, Button} from "@chakra-ui/react"

import { removeCardFromUser, getCharsThatBelongToUser } from "../../store/users";

import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"

function Character({character}) {

    const dispatch = useDispatch()
    const { id } = useParams()

    const onDelete = () => {

        dispatch(removeCardFromUser(id, character.id))

    }

    // useEffect(() => {
    //     dispatch(getCharsThatBelongToUser(id))
    // }, [dispatch]])

    return (
      <Box
      m={5}
      >
          <Button marginBottom={2} colorScheme="red" onClick={onDelete}>Delete</Button>
          <Box
          w="250px"
          h="375px"
          boxShadow="xl"
          rounded="lg"
          bgColor="blackAlpha.100"
          overflowY="auto"
          >
              <Box
              bgColor="red.600"
              >
                  <Text fontSize="4rem" color="whiteAlpha.800" textAlign="center">
                        {character.kanjiCharacter}
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
                      {character.grade ?
                    <Flex
                    justify="space-between"
                    >
                        <Text fontWeight="bold">Grade:</Text>
                        <Text fontWeight="bold">{character.grade}</Text>
                    </Flex>
                    :
                    null
                    }


                    {character.strokeCount ?
                    <Flex
                    justify="space-between"
                    >
                        <Text fontWeight="bold">Stroke count:</Text>
                        <Text fontWeight="bold">{character.strokeCount}</Text>
                    </Flex>
                    :
                    null
                    }


                    {character.jlpt ?
                    <Flex
                    justify="space-between"
                    >
                        <Text fontWeight="bold">JLPT:</Text>
                        <Text fontWeight="bold">{character.jlpt}</Text>
                    </Flex>
                    :
                    null
                    }


                    {character.heisigEn ?
                    <Flex
                    justify="space-between"
                    >
                        <Text fontWeight="bold">Heisig:</Text>
                        <Text fontWeight="bold">{character.heisigEn}</Text>
                    </Flex>
                    :
                    null
                    }

                    {character.meanings ?
                    <Flex
                    justify="space-between"
                    flexWrap="wrap"
                    >
                        <Text fontWeight="bold">Meanings:</Text>
                        <Text fontWeight="bold">{character.meanings.split(",").join(", ")}</Text>
                    </Flex>
                    :
                    null
                    }


                    {character.kunReadings ?
                    <Flex
                    justify="space-between"
                    flexWrap="wrap"
                    >
                        <Text fontWeight="bold">Kunyomi:</Text>
                        <Text fontWeight="bold">{character.kunReadings.split(",").join(", ")}</Text>
                    </Flex>
                    :
                    null
                    }


                    {character.onReadings ?
                    <Flex
                    justify="space-between"
                    flexWrap="wrap"
                    >
                        <Text fontWeight="bold">Onyomi:</Text>
                        <Text fontWeight="bold">{character.onReadings.split(",").join(", ")}</Text>
                    </Flex>
                    :
                    null
                    }

                    {character.nameReadings ?
                    <Flex
                    justify="space-between"
                    flexWrap="wrap"
                    >
                        <Text fontWeight="bold">Name reading:</Text>
                        <Text fontWeight="bold">{character.nameReadings.split(",").join(", ")}</Text>
                    </Flex>
                    :
                    null
                    }


                    {character.unicode ?
                    <Flex
                    justify="space-between"
                    >
                        <Text fontWeight="bold">Unicode:</Text>
                        <Text fontWeight="bold">{character.unicode}</Text>
                    </Flex>
                    :
                    null
                    }
                  </Stack>
              </Box>
          </Box>
      </Box>
    )
}

export default Character
