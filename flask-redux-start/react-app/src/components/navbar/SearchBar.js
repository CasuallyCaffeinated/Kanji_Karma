import React from 'react'
import { Flex, Input, Box } from "@chakra-ui/react";


function SearchBar() {
    return (
        <Flex align="center" justify="center" >
           <Box className="search-container">
           Search: <Input placeholder="Kanji or English words..." className="search-bar input" type="text" bgColor="purple.600"/>
           </Box>
       </Flex>
    )
}

export default SearchBar
