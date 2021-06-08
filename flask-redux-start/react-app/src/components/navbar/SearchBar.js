import React from 'react'
import { Flex, Input, Box } from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";


function SearchBar() {
    return (
        <Flex align="center" justify="center" >
           <Box className="search-container">
           <Search2Icon /> <Input placeholder="Kanji or English words..." className="search-bar input" type="text" bgColor="blackAlpha.200"/>
           </Box>
       </Flex>
    )
}

export default SearchBar
