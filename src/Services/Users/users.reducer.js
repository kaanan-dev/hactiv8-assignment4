import { apiGET } from "../../Utils/api";
import { Loading } from '../../Services/Global/loading.reducer';


const GET_USERS = "USERS/GET_USERS";


const reducer = (
    state = [],
    action
) => {
    switch (action.type) {
        case GET_USERS:
            return [...action.payload];
        // return [ ...state, ...action.payload ];
        default:
            return state;
    }
}


export const getUsers = payload => (
    {
        type: GET_USERS, payload
    }
)


export const UsersAction = {
    getUsers: (query = '') =>
        (dispatch) => {
            dispatch(Loading.setCurrentState(true));
            apiGET(`https://5d371ebf86300e0014b64ae7.mockapi.io/api/v1/users${query}`).then((data) => {
                dispatch(getUsers(data));
                dispatch(Loading.setCurrentState(false));
            })

        }
}

export default reducer;