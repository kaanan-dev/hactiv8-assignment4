const GET_USERS = "USERS/GET_USERS";
const INC_NUMBER = "USERS/INC_NUMBER";
const DEC_NUMBER = "USERS/DEC_NUMBER";
const MULTIPLICATION = "USERS/MULTIPLICATION";


const reducer = (
    state = 0,
    action
) => {
    switch (action.type) {
        case GET_USERS:
            return state;
        case INC_NUMBER:
            return state + action.payload;
        case DEC_NUMBER:
            return state - action.payload;
        case MULTIPLICATION:
            return state*action.payload;
        default:
            return state;
    }
}


export const incrementProcessing = (payload) => (
    {
        type: INC_NUMBER,
        payload
    }
)

export const decrementProcessing = (payload) => (
    {
        type: DEC_NUMBER,
        payload
    }
)


export const multiplicationProcess = (payload) => (
    {
        type: MULTIPLICATION,
        payload
    }
)

export default reducer;