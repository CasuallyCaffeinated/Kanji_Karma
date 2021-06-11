import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Flex, Input, Box, Button } from "@chakra-ui/react";

import { getKanji, getMeanings } from "../../store/search";

import { Search2Icon } from "@chakra-ui/icons";
import { useHistory } from 'react-router';

import KanjiCharacterModal from "../modal/KanjiCharacterModal"

// ^[ a-zA-Z]*$



function SearchBar() {

    const dispatch = useDispatch()
    const searchResult = useSelector(state => state.searchReducer.searchResults)

    const history = useHistory()
    const [searchTerm, setSearchTerm] = useState('')



    const handleSearch = (e) => {
        e.preventDefault()

        const englishRegex = /^[ a-zA-Z]*$/g
        const searched = searchTerm.match(englishRegex)


        if(searched) {
            dispatch(getMeanings(searchTerm))
            history.push(`/search/${searchTerm.toLowerCase()}`)
            setSearchTerm('')
        } else {
            let kanjiArray =  Object.values(searchTerm)
            dispatch(getKanji(kanjiArray))
            setSearchTerm('')
            // return <KanjiSearchResult searchResult={searchResult} />
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
           bgColor="blackAlpha.600"/>
           <Button onClick={handleSearch} marginLeft="5px" ><Search2Icon /></Button>
            <KanjiCharacterModal />
           </Box>
           </form>
       </Flex>
    )
}

export default SearchBar
