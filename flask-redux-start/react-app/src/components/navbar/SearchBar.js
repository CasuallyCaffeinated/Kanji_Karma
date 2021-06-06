import React from 'react'
import { Flex, Box, Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function SearchBar() {
    return (
        <Flex align="center" justify="center" >
           <Box className="search-container">
                <Input placeholder="Search..." className="japanese-search">
                    {/* <IconButton icon={<SearchIcon />} /> */}
                </Input>
           </Box>
       </Flex>
    )
}

export default SearchBar
