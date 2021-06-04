//? react-app/src/store/decks

//* CONSTANTS
const GET_DECKS = "decks/GET_DECKS"
const GET_DECK = "decks/GET_DECKS"
const ADD_DECK = "decks/ADD_DECK"
const ADD_CHAR_TO_DECK = "decks/ADD_CHAR_TO_DECK"
const UPDATE_DECK = "decks/UPDATE_DECK"
const DELETE_DECK = "decks/DELETE_DECK"
const REMOVE_CARD = "decks/REMOVE_CARD"
const REMOVE_ALL_CARDS = "decks/REMOVE_ALL_CARDS"

//* ACTION CREATORS
const getDecks = (decks) => ({
    type: GET_DECKS,
    payload: decks
})

const getOneDeck = (deck) => ({
    type: GET_DECK,
    payload: deck
})

const addDeck = (deck) => ({
    type: ADD_DECK,
    payload: deck
})

const addCharToDeck = (deck) => ({
    type: ADD_CHAR_TO_DECK,
    payload: deck
})

const updateDeck = (deck) => ({
    type: UPDATE_DECK,
    payload: deck
})

const deleteDeck = (deck) => ({
    type: DELETE_DECK,
    payload: deck
})

const removeCard = (deck) => ({
    type: REMOVE_CARD,
    payload: deck
})

const removeCards = (deck) => ({
    type: REMOVE_ALL_CARDS,
    payload: deck
})

//* THUNKS
//! Get all
export const getAllDecks = () => async dispatch => {
    const res = await fetch("/api/decks/");

    if (res.ok) {
        const data = await res.json();
        await dispatch(getDecks(data.decks))
    } else {
        return {error: "An error occurred. Please try again."}
    }
}
