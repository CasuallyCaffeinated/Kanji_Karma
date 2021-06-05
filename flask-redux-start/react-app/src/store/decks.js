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
        return {errors: "An error occurred. Please try again."}
    }
}

//! Get one
export const getDeck = (id) => async dispatch => {
    const res = await fetch(`/api/decks/${id}`)

    if (res.ok) {
        const data = await res.json()
        await dispatch(getOneDeck(data))
    } else {
        return {errors: "An error occurred. Please try again."}
    }
}

//! Create one deck
export const createDeck = (id, {
    deckName,
    category,
    userId
}) => async dispatch => {
    const res = await fetch(`/api/decks/${id}`, {
        method: `POST`,
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            deckName,
            category,
            userId
        })
    })
    const data = await res.json()
    if (data.errors) {
        return data
    }

    dispatch(addDeck(data))
}

//! Add Character Card to Deck
export const addCharCardToDeck= (deckId, cardId) => async dispatch => {
    const res = await fetch(`/api/decks/${deckId}`, {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cardId
        })
    })
    const data = await res.json()
    if (data.errors) {
        return data
    }

    dispatch(addCharToDeck(data))
}

//! Update deck
export const editDeck = (id, {
    deckName,
    category,
    userId
}) => async dispatch => {
    const res = await fetch(`/api/decks/${id}`, {
        method: `PUT`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            deckName,
            category,
            userId
        })
    })
    const data = res.json()
    if (data.errors) {
        return data
    }
    dispatch(updateDeck(data))
}

//! Delete the whole deck
export const removeDeck = (deck) => async dispatch => {
    const res = await fetch(`/api/decks/${deck.id}`, {
        method: `DELETE`
    })
    if (res.ok) {
        dispatch(deleteDeck(deck.id))
    }
}

//! Delete a card in the deck
export const removeCardFromDeck = (deckId, cardId) => async dispatch => {
    const res = await fetch(`/api/decks/${deckId}/remove-char`, {
        method: `DELETE`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cardId
        })
    })
    const data = await res.json()
    if (data.errors) {
        return data
    }
    dispatch(removeCard(data))
}

//! Remove all cards that belong to a deck, w/out deleting the whole deck
export const removeAllCardsFromDeck = (id) => async dispatch => {
    const res = await fetch(`/api/decks/${id}/remove-all`, {
        method: `DELETE`
    })
    if (res.ok){
        dispatch(removeCards(id))
    }
}

const initialState = {decks: null}
/*
*================ REDUCER ================
*/
export default function deckReducer(state = initialState, action) {
    let newState;

    switch (action.type) {
        case GET_DECKS:
            newState = Object.assign({}, state);
            newState.decks = action.payload;
                return newState;

        case GET_DECK:
            newState = Object.assign({}, state);
            newState.decks = action.payload;
                return newState

        case ADD_DECK:
            newState = Object.assign({}, state)
            newState.decks[action.payload.id] = action.payload
                return newState;

        case ADD_CHAR_TO_DECK:
            newState = Object.assign({}, state)
            newState.decks[action.payload.id] = action.payload
                return newState;

        case UPDATE_DECK:
            newState = Object.assign({}, state);
            newState.decks[action.payload.id] = action.payload
                return newState;

        case DELETE_DECK:
            newState = Object.assign({}, state);
            delete newState.decks[action.payload]
                return newState;

        case REMOVE_CARD:
            newState = Object.assign({}, state)
            delete newState.decks[action.payload]
                return newState;

        case REMOVE_ALL_CARDS:
            newState = Object.assign({}, state)
            delete newState.decks[action.payload]
                return newState;

        default:
            return state;
    }
}
