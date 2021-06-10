import React from 'react'

import { Box, Stack, Text, Flex, Button} from "@chakra-ui/react"


function EnglishCharInfo({result}) {
    return (
        <Box
        margin={5}
      >
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
                        {result.kanjiCharacter}
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
                      {result.grade ?
                    <Flex
                    justify="space-between"
                    >
                        <Text fontWeight="bold">Grade:</Text>
                        <Text fontWeight="bold">{result.grade}</Text>
                    </Flex>
                    :
                    null
                    }


                    {result.strokeCount ?
                    <Flex
                    justify="space-between"
                    >
                        <Text fontWeight="bold">Stroke count:</Text>
                        <Text fontWeight="bold">{result.strokeCount}</Text>
                    </Flex>
                    :
                    null
                    }


                    {result.jlpt ?
                    <Flex
                    justify="space-between"
                    >
                        <Text fontWeight="bold">JLPT:</Text>
                        <Text fontWeight="bold">{result.jlpt}</Text>
                    </Flex>
                    :
                    null
                    }


                    {result.heisigEn ?
                    <Flex
                    justify="space-between"
                    >
                        <Text fontWeight="bold">Heisig:</Text>
                        <Text fontWeight="bold">{result.heisigEn}</Text>
                    </Flex>
                    :
                    null
                    }

                    {result.meanings ?
                    <Flex
                    justify="space-between"
                    flexWrap="wrap"
                    >
                        <Text fontWeight="bold">Meanings:</Text>
                        <Text fontWeight="bold">{result.meanings.split(",").join(", ")}</Text>
                    </Flex>
                    :
                    null
                    }


                    {result.kunReadings ?
                    <Flex
                    justify="space-between"
                    flexWrap="wrap"
                    >
                        <Text fontWeight="bold">Kunyomi:</Text>
                        <Text fontWeight="bold">{result.kunReadings.split(",").join(", ")}</Text>
                    </Flex>
                    :
                    null
                    }


                    {result.onReadings ?
                    <Flex
                    justify="space-between"
                    flexWrap="wrap"
                    >
                        <Text fontWeight="bold">Onyomi:</Text>
                        <Text fontWeight="bold">{result.onReadings.split(",").join(", ")}</Text>
                    </Flex>
                    :
                    null
                    }

                    {result.nameReadings ?
                    <Flex
                    justify="space-between"
                    flexWrap="wrap"
                    >
                        <Text fontWeight="bold">Name reading:</Text>
                        <Text fontWeight="bold">{result.nameReadings.split(",").join(", ")}</Text>
                    </Flex>
                    :
                    null
                    }


                    {result.unicode ?
                    <Flex
                    justify="space-between"
                    >
                        <Text fontWeight="bold">Unicode:</Text>
                        <Text fontWeight="bold">{result.unicode}</Text>
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

export default EnglishCharInfo
