//? react-app/src/store/characters

//* CONSTANTS
const GET_CHARACTERS = "characters/GET_CHARACTERS"
const GET_CHARACTER = "characters/GET_CHARACTER"
const ADD_CARD_TO_USER = "characters/ADD_CARD_TO_USER"


//* ACTION CREATORS
const getCharacters = (characters) => ({
    type: GET_CHARACTERS,
    payload: characters
})

const getCharacter = (character) => ({
    type: GET_CHARACTER,
    payload: character
})

const addCardToUser = (character) => ({
    type: ADD_CARD_TO_USER,
    payload: character
})

//* THUNKS
//! Get all
export const getAllCharacters = () => async dispatch => {
    const res = await fetch("/api/characters/");

    if (res.ok) {
        const data = await res.json()
        await dispatch(getCharacters(data.characters))
    } else {
        return {errors: "An error occurred. Please try again."}
    }
}

//! Get one
export const getOneCharacter = (id) => async dispatch => {
    const res = await fetch(`/api/characters/${id}`)
    if (res.ok) {
        const data = await res.json()
        await dispatch(getCharacter(data))
    }
}


//! Add card to user
export const addACard = (cardId, userId) => async dispatch => {
    const res = await fetch(`/api/characters/${cardId}/add-card`, {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId
        })
    });
    const data = await res.json()
    if (data.errors) {
        return data
    }
    dispatch(addCardToUser(data))
}

const initialState = {characters: null}
//* ================== REDUCER ================== *\\
export default function characterReducer(state = initialState, action) {
    let newState;

    switch (action.type) {
        case GET_CHARACTERS:
            newState = Object.assign({}, state);
            newState.characters = action.payload;
                return newState;

        case GET_CHARACTER:
            newState = Object.assign({}, state);
            newState.characters = action.payload;
                return newState

        case ADD_CARD_TO_USER:
            newState = Object.assign({}, state);
            newState.characters[action.payload.id] = action.payload
                return newState;

        default:
            return state
    }
}
