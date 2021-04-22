import React, { useState } from 'react'
import { axios } from 'axios'
//צריך התקנה npm i axios


export  function CallToServer() {

    const { users, setUsers } = useState()
    const { currentName, setCurrentName } = useState()

    const getUsersAxios = () => {
        return axios.get
    }

    const getUsers = () => {
        const url = 'http://localhost:3000/getUserById/34'
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
            mode: 'cors',
        }).then(res => res.json()).then((result) => {
            setUsers(result.users.Users)
        }).catch((error) => {
            alert(error)
        })
    }
    // const changeName = (vaue) => {
    //     const url = ' של puy!!!!כאן צריך לשים את הניתוב מ-הפןסטמן /${crreatName}'
    //     return fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             Accept: 'application/json'
    //         },
    //         mode: 'cors',
    //     }).then(res => res.json()).then((result) => {
    //         console.log(result);
    //     }).catch((error) => {
    //         alert(error)
    //     })
    // }
    return (
        <>
            <h1>call to server</h1>
            <button onClick={() => getUsers()}>get Users</button>
            {/* <button onClick={() => getUserAxios()}>get Users axios</button>
            <button onClick={() => changeName()}>change Name</button>
            <input onChange={(e) => setCurrentName(e.target.value)} /> */}
            <label>{users ? 'have user' : 'none'}</label>
            <ul>
                {users && users.map((user, index) => {
                    return (<li>{users.name} </li>)
                })}
            </ul>
        </>
    )

}