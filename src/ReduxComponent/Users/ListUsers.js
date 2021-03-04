

import { Button } from 'antd'
import UserAction from '../../Services/Users/users.reducer';



const TableUsers = (props) => {

    console.log("props", props);
    return(
        <Button onClick={UserAction} type="primary">
            Base Button
        </Button>
    )
}

export default TableUsers;