import { apiGET } from "../../Utils/api";

const LOADING = 'GLOBAL/LOADING';

const reducer = (
    state = {},
    action
) => {
    switch (action.type) {
        // return [ ...state, ...action.payload ];
        case LOADING:
            return action.payload;

        default:
            return state;
    }
}

export const SetLoading = payload => (
    {
        type: LOADING, payload
    }
)

export const Loading = {
    setCurrentState: (LoadingState) =>
        (dispatch) => {
            dispatch(SetLoading(LoadingState));
        }
}

export default reducer;