import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

import {useActions} from "../hooks/useActions";

const UserList = () => {

    const {users, error, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    }, [])

    if (loading) {
        return <h1>Is loading...</h1>
    }

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UserList;
