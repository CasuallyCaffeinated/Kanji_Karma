//? react-app/src/store/search

//* CONSTANTS
const SEARCH_JP = "search/SEARCH_JP";
const SEARCH_EN = "search/SEARCH_EN";


//* ACTION CREATORS
const searchJapanese = (character) => ({
    type: SEARCH_JP,
    payload: character
})

const searchEnglish = (meanings) => ({
    type: SEARCH_EN,
    payload: meanings
})


//* THUNKS
//! Get kanji
export const getKanji = (query) => async dispatch => {
    const res = await fetch(`/api/search/${query}`)

    if (res.ok) {
        const searchResult = await res.json()
        dispatch(searchJapanese(searchResult))
        return searchResult
    } else {
        return {errors: "Search error"}
    }
}

//! Get English meanings
export const getMeanings = (query) => async dispatch => {
    const res = await fetch(`/api/search/${query}/words`);

    if (res.ok) {
        const searchResults = await res.json()
        dispatch(searchEnglish(searchResults.search_results))
        return searchResults
    } else {
        return {errors: "Search error"}
    }
}


//* ========== REDUCER ========== *\\
export default function(state = {}, action) {
    let newState;

    switch (action.type) {
        case SEARCH_JP:
            newState = Object.assign({}, state)
            newState.searchResults = action.payload
                return newState

        case SEARCH_EN:
            newState = Object.assign({}, state)
            newState.searchResults = action.payload //? may have to revisit this
                return newState;

        default:
            return state
    }
}
