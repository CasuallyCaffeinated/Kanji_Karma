import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Flex, Input, Box, FormControl, InputGroup, Button } from "@chakra-ui/react";

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

    // const { query } = useParams()

    // console.log("TEST TEST, HERE IS THE RESULT", searchResult);

    // console.log("PROP IN OBJ", searchResult?.kanjiCharacter);

    // let searched;

    const handleSearch = (e) => {
        e.preventDefault()

        const englishRegex = /^[ a-zA-Z]*$/g
        const searched = searchTerm.match(englishRegex)


        if(searched) {
            dispatch(getMeanings(searchTerm))
            history.push(`/search/${searchTerm.toLowerCase()}`)
            // setSearchTerm('')
        } else {
            let kanjiArray =  Object.values(searchTerm)
            dispatch(getKanji(kanjiArray))
            // setSearchTerm('')
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
           bgColor="blackAlpha.200"/>
           <Button onClick={handleSearch}><Search2Icon /></Button>
           {/* { !searched && */}
            <KanjiCharacterModal />
        {/* } */}
           </Box>
           </form>
       </Flex>
    )
}

export default SearchBar