//? react-app/src/store/users.js

//* CONSTANTS
const GET_USERS = "users/GET_USERS";
const GET_USER = "users/GET_USER";
const EDIT_USER = "users/EDIT_USER";


//* ACTION CREATORS
const getUsers = (users) => ({
    type: GET_USERS,
    payload: users
});

const getUser = (user) => ({
    type: GET_USER,
    payload: user
});

const editOneUser = (user) => ({
    type: EDIT_USER,
    payload: user
});


//* THUNKS
//! Get all
export const getAllUsers = () => async dispatch => {
    const response = await fetch("/api/users/");

    if (response.ok) {
        const data = await response.json();
        await dispatch(getUsers(data.users))
    } else {
        return {error: "An error occurred. Please try again."}
    }
};

//! Get one
export const getOneUser = (id) => async dispatch => {
    const response = await fetch(`/api/users/${id}`)
    if (response.ok) {
        const data = await response.json()
        await dispatch(getOneUser(data))
    } else {
        return {error: "An error occurred. Please try again."}
    }
}

//! Edit
export const updateUser = (id, {
    name,
    username,
    email,
    password
}) => async dispatch => {
    const response = await fetch(`/api/users/${id}`, {
        method:"PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            username,
            email,
            password
        })
    })
    const data = await response.json();

    dispatch(editOneUser(data))
}

const initialState = {users: null}
//////////////////////////////////* REDUCER //////////////////////////////////
export default function userReducer(state = initialState, action) {
    let newState;

    switch (action.type) {
        case GET_USERS:
            newState = Object.assign({}, state);
            newState.users = action.payload;
                return newState;

        case GET_USER:
            newState = Object.assign({}, state);
            newState.users = action.payload;
                return newState

        case EDIT_USER:
            newState = Object.assign({}, state);
            newState.users[action.payload.id] = action.payload;
                return newState;

        default:
            return state;
    }
}
