//? react-app/src/store/search

//* CONSTANTS
const SEARCH_JP = "search/SEARCH_JP";
const SEARCH_EN = "search/SEARCH_EN";
const CLOSE_KANJI_MODAL = "search/CLOSE_KANJI_MODAL";


//* ACTION CREATORS
const searchJapanese = (character) => ({
    type: SEARCH_JP,
    payload: character
})

const searchEnglish = (meanings) => ({
    type: SEARCH_EN,
    payload: meanings
})

export const closeKanjiModal = () => ({
    type: CLOSE_KANJI_MODAL
})


//* THUNKS
//! Get kanji
export const getKanji = (query) => async dispatch => {
    const res = await fetch(`/api/search/${query}`)
    // console.log("THIS IS THE RES", res);
    if (res.ok) {
        const searchResult = await res.json()
        // console.log("JP SEARCH", searchResult);
        dispatch(searchJapanese([searchResult]))
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

const initialState = {
    searchResults: null,
    showKanji: false
}
//* ========== REDUCER ========== *\\
export default function searchReducer(state = initialState, action) {
    let newState;

    switch (action.type) {
        case SEARCH_JP:
            newState = Object.assign({}, state)
            newState.searchResults = action.payload
            newState.showKanji = true
                return newState

        case CLOSE_KANJI_MODAL:
            newState = Object.assign({}, state)
            newState.showKanji = false
                return newState;

        case SEARCH_EN:
            newState = Object.assign({}, state)
            newState.searchResults = action.payload //? may have to revisit this
                return newState;

        default:
            return state
    }
}
