import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Flex, Input, Box, FormControl, InputGroup, Button } from "@chakra-ui/react";

import { getKanji, getMeanings } from "../../store/search";

import { Search2Icon } from "@chakra-ui/icons";
import { useHistory, useParams } from 'react-router';

// ^[ a-zA-Z]*$



function SearchBar() {

    const dispatch = useDispatch()
    const searchResult = useSelector(state => state.searchReducer)

    const history = useHistory()
    const [searchTerm, setSearchTerm] = useState('')

    const { query } = useParams()



    const handleSearch = (e) => {
        e.preventDefault()

        const englishRegex = /^[ a-zA-Z]*$/g
        const searched = searchTerm.match(englishRegex)


        if(searched) {
            dispatch(getMeanings(searchTerm))
            history.push(`/search/${searchTerm.toLowerCase()}`)

        } else {
            dispatch(getKanji(searchTerm))
            console.log(`This works for japanese words`);
        }

    }

    return (
        <Flex align="center" justify="center" >
            <form onSubmit={handleSearch}>
           <Box className="search-container">
           <Input
           placeholder="Kanji or English words..."
           className="search-bar input"
           type="text"
           onChange={(e) => setSearchTerm(e.target.value)}
           value={searchTerm}
           bgColor="blackAlpha.200"/>
           <Button onClick={handleSearch}><Search2Icon /></Button>
           </Box>
           </form>
       </Flex>
    )
}

export default SearchBar
