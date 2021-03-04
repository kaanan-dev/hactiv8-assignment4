const GET_BILLS = "REGISTER/GET_BILLS";

const reducer = (
    state = 0,
    action
) => {
    switch (action.type) {
        case GET_BILLS:
            return state;
        default:
            return state;
    }

}

export default reducer;