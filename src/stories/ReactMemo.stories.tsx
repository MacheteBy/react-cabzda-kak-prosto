import React from "react";
import { useState } from "react";


export default {
    title: 'React.memo demo',
};


const NewMessagesCounterSecret = (props: { count: number }) => {
    return (
        <div>{props.count}</div>
    )
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS')
    return (
        <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
    )
}

const Users = React.memo(UsersSecret)
const NewMessagesCounter = React.memo(NewMessagesCounterSecret)

export const Example1 = () => {
    console.log('Example')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dima', 'Valera', 'Artem']);


    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count={counter} />
            <Users users={users} />
        </>
    )
}


