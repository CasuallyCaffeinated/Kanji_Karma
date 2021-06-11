import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

import { Flex, SimpleGrid, Heading, Box } from "@chakra-ui/react"

import EnglishCharInfo from "./EnglishCharInfo"

function EnglishSearchResult() {

    const user = useSelector(state => state.session.user)
    const searchResult = useSelector(state => state.searchReducer.searchResults)
    const [searchValues, setSearchValues] = useState([])

    // const [isLoading, setIsLoading] = useState(false)
    // setIsLoading(true) setIsLoading(false)
    // console.log("SEARCH RESULTS", searchResult)

    useEffect(() => {


        if (searchResult) {
            setSearchValues([...searchResult])

        }
    }, [searchResult])

    return (
        <>
        <Flex
        h="80vh"
        w="100vw"
        align="center"
        justify="center"
        flexWrap="wrap"
        >
        <Box
            w="500px"
            h="5%"
            textAlign="center"
            >
                <Heading
                size="lg"
                bold="normal"
                className="heading one"
                color="red.600"
                >
                Search result:
                </Heading>
            </Box>
            <SimpleGrid minChildWidth="10px" width="100%">
            <Flex
            w="100%"
            justify="space-around"
            align="center"
            flexWrap="wrap"
            marginY="5%"
            >
                    { searchValues ?
                        Object.values(searchValues).map((result, idx) =>
                        <EnglishCharInfo key={idx} result={result} />
                        )
                        :
                        null
                    }
            </Flex>
            </SimpleGrid>
        </Flex>
        </>
    )
}

export default EnglishSearchResult


//  {/* <Box bg="tomato" height="375px" width="250px"></Box>
//   <Box bg="tomato" height="375px" width="250px"></Box>
//  <Box bg="tomato" height="375px" width="250px"></Box>
//   <Box bg="tomato" height="375px" width="250px"></Box>
//   <Box bg="tomato" height="375px" width="250px"></Box> */}
