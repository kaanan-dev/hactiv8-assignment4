import { Button } from 'antd'
import { connect } from 'react-redux';
import { incrementProcessing, decrementProcessing } from '../../Services/Users/users.reducer';
import  Bills  from "../Bills/ListBills";

const Users = (props) => {
    return (
        <>
            <Button onClick={() => props.dispatch(incrementProcessing(1))} type="primary" shape="round" size={'large'} >
                + , current: {props.state.users}
            </Button>
            <br />
            <Button onClick={() => props.dispatch(decrementProcessing(1))} type="danger"  shape="round" size={'large'}>
                - , current: {props.state.users}
            </Button>
            <br />
            <Bills />
            
        </>
    )
}

export default connect(
    (state) => ({ state }) //mapStateToProps
    )(Users);