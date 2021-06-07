import React from 'react'
import { Flex, Input } from "@chakra-ui/react";


function SearchBar() {
    return (
        <Flex align="center" justify="center" >
           <div className="search-container">
           Search: <Input placeholder="Kanji or English words..." className="search-bar input" type="text" />
           <i className="fas fa-search"></i>
           </div>
       </Flex>
    )
}

export default SearchBar
