import React, {useEffect, useState} from "react";
import Pages from "./components/Pages";
import firstUser, {activeUserID, setActiveUserIdToStorage, setUsersToStorage} from "./data/users";
import {useHistory} from "react-router-dom";


export const GlobalContext = React.createContext(null)
const URL = 'http://propets.telran-edu.de:8080/api/v1/'

const App = () => {


    const [users, setUsers] = useState(firstUser)
    const [auth, setAuth] = useState(false)
    const [activeUser, setActiveUser] = useState(activeUserID)

    useEffect( () => {
        if(localStorage.key('apiKeyToken')){
            setAuth(true)
            getUserByID()
        }
    }, [])

    const getUserByID = async () => {
        const idx = localStorage.getItem('activeUser')
        const token = localStorage.getItem('apiKeyToken')
        const response = await fetch('http://propets.telran-edu.de:8080/api/v1/users/'+idx,
            {
                headers: {
                    "x-api-key": token
                }
            })
        const data = await response.json()
        setActiveUser(data)
    }

    const register = async (user) => {
        try {
            const response = await fetch(`${URL}auth/signup`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {'Content-type': 'application/json'}
            })
            const data = await response.json()
            if (response.status === 200) {
                setUsersToStorage(data)
            } else {
                alert('User is already existing ' + response.status)
            }
        } catch (error) {
        }
    };
    const logIn = async (user) => {
        try {
            const response = await fetch(`${URL}auth/signin`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {'Content-type': 'application/json'}
            })
            const data = await response.json()
            if (data.accessToken){
                localStorage.setItem('apiKeyToken', data.accessToken)
                //setUsers(data) => question to Ignatyi
                setActiveUserIdToStorage(data.id)
                getUserByID()
                //localStorage.setItem('activeUser', data.id)
                setAuth(true)
            }else{
                alert('Username or password is incorrect')
            }

        } catch(error) {
            console.log(error)
        }

    }

    const logOut = (user) => {
            localStorage.removeItem("apiKeyToken");
            localStorage.removeItem('activeUser');
    }


    const addUser = data => {
        const newUser = {...data, id: Date.now()}
        setUsers([...users, newUser])
        setUsersToStorage(newUser)
    }

    return (
        <GlobalContext.Provider value={{
            auth,
            logIn,
            register,
            addUser,
            logOut,
            activeUser
        }}>
            <Pages/>
        </GlobalContext.Provider>
    )
}

export default App;
