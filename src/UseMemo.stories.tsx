import React from "react"
import { useMemo, useState } from "react"


export default {
    title: 'useMemo'
}

export const DificultCountingExample = () => {

    const [a, setA] = useState(1)
    const [b, setB] = useState(2)

    let resultA = 1
    let resultB = 1


    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA
    }, [a])



    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
            <hr />
            <div>Result for a: {resultA} </div>
            <div>Result for b: {resultB} </div>
        </>
    )
}


    const UsersSecret = (props: { users: Array<string> }) => {
        console.log('USERS SECRET')
        return (
            <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
        )
    }

    const Users = React.memo(UsersSecret)

    export const HelpsToReactMemo = () => {
        console.log('Example')
        const [counter, setCounter] = useState(0);
        const [users, setUsers] = useState(['Dim', 'Valera', 'Artem']);

        const newArray = useMemo(() => {
            const newArray = users.filter(u => u.toLocaleLowerCase().indexOf('a') > -1)
            return newArray
        }, [users])


        const addUsers = () => {
            const newUsers = [...users, 'Sveta' + new Date().getTime()]
            setUsers(newUsers)
        }

        return (
            <>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={addUsers}>add users</button>
                {counter}
                <Users users={newArray} />
            </>
        )
    }
