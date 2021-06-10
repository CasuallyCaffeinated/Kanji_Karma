import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

import { Flex, SimpleGrid } from "@chakra-ui/react"

import EnglishCharInfo from "./EnglishCharInfo"

function EnglishSearchResult() {

    const searchResult = useSelector(state => state.searchReducer.searchResults)
    const [searchValues, setSearchValues] = useState([])

    // console.log("SEARCH RESULTS", searchResult)

    useEffect(() => {
        if (searchResult) {
            setSearchValues([...searchResult])
        }
    }, [searchResult])

    return (
        <>
        <Flex
        h="100vh"
        w="100vw"
        align="center"
        justify="center"
        flexWrap="wrap"
        >

            <SimpleGrid minChildWidth="10px" width="100%">
            <Flex
            w="100%"
            justify="space-around"
            align="center"
            flexWrap="wrap"
            marginY="10%"
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
