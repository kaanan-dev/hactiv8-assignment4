const GET_USERS = "USERS/GET_USERS";
const ADD_NUMBER = "USERS/ADD_NUMBER";


const reducer = (
        state = 0,
        action
) => {
    switch (action.type) {
        case GET_USERS:
            return state;
        case ADD_NUMBER:
            return state + action.payload;
        default:
            return state;
    }
}


export const addNumber = (data) => (
    {
        type: ADD_NUMBER,
        payload: data
    }
)

export default reducer;