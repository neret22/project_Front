
import React, {useState, useContext} from 'react';
import {Fragment} from 'react';
import logo_blue from './images/logo_blue.png'
import {useHistory} from "react-router-dom";
import {GlobalContext} from "../../App";



const Signup = () => {
    const [passwordError, setPasswordError] = useState(false)
    const [noPasswordError, setNoPasswordError] = useState(false)
    const cntx = useContext(GlobalContext)
    const history = useHistory()
    const [initialData, setInitialData] = useState({
        fullName: '',
        email: '',
        password: '',
        repeatPassword: ''
    })
        const noPassword = (password, repeatPassword) => {
        if (password && repeatPassword) return true;
        setNoPasswordError(true)
        return false;
    };
    const isPasswordValid = (password, repeatPassword) => {
        if ( password && repeatPassword && password === repeatPassword ) return true;
        setPasswordError(true)
        return false;
    };

    const changeFieldHandle = (event) => {
            setInitialData({
                ...initialData,[event.target.name] : event.target.value
            })
        }

        const submitHandle = async  (event) => {
            event.preventDefault()
            if(!isPasswordValid(initialData.password,initialData.repeatPassword)){
                return false;

            } else if (!noPassword(initialData.password,initialData.repeatPassword)){
                return false;
            }

            await cntx.register(initialData)
            history.push('./general')

        }
        const goToHomePage = (event) => {
            history.push('./')
        }

        const passwordErrorRender = () => {
            if (passwordError){
                return (
                    <div className="text-warning">Please double check passwords, they have match</div>
                )
            }
            return (
                <div></div>
            )
        }
    const noPasswordErrorRender = () => {
        if (noPasswordError){
            return (
                <div className="text-warning">Please enter a password</div>
            )
        }
        return (
            <div></div>
        )
    }
    return (
        <Fragment>
            <div className="grid w-75 aad p-5 mx-auto my-5">
                <div className="w-75 grid bg-light m-5 p-5 mx-auto row">
                    <div>
                        <img src={logo_blue}
                             className="rounded float-start " alt="..."/>
                    </div>
                    <div className="mt-4">
                        <h2 className=" fs-4 add-text"><span className="fx-bold">Welcome!</span> Please sign in / sign
                            up to continue
                            or </h2>
                    </div>
                    <div className="btn-group mx-auto col-12">
                        <button className="btn aad col-4" type="button">Sign up</button>
                        <button onClick={(event) => history.push('./signin')}
                                className="btn btn-primary col-4 opacity-25" type="button">Sign in
                        </button>
                    </div>
                    <form onSubmit = {submitHandle}>
                        <div className="row justify-content-between">
                            <div className="col-6 ">
                                <div className="mt-3 row justify-content-between">
                                    <label htmlFor="inputPassword"
                                           className="col-sm-4 col-form-label text-end">Name</label>
                                    <div className="col-sm-8 p-0">
                                        <input type="text" className="form-control p-1" id="inputPassword"
                                               placeholder="Helen Johnson" name = "fullName"
                                               onChange={changeFieldHandle}/>
                                    </div>
                                </div>
                                <div className="mt-3 row justify-content-between">
                                    <label htmlFor="inputPassword"
                                           className="col-sm-4 col-form-label text-end">Email</label>
                                    <div className="col-sm-8 p-0">
                                        <input type="text" className="form-control p-1" id="inputPassword"
                                               placeholder="helenjohnson@gmail.com" name = "email"
                                               onChange={changeFieldHandle}/>
                                    </div>
                                </div>
                                <div className="mt-3 row justify-content-between">
                                    <label htmlFor="inputPassword"
                                           className="col-sm-4 col-form-label text-end">Password:</label>
                                    <div className="col-sm-8 p-0">
                                        <input type="password" className="form-control p-1" id="inputPassword"
                                               placeholder="*****************" name = "password"
                                               onChange={changeFieldHandle}/>
                                        {noPasswordErrorRender()}
                                    </div>
                                </div>
                                <div className="mt-3 row justify-content-between">
                                    <label htmlFor="inputPassword"
                                           className="col-sm-4 col-form-label text-end">Password:</label>
                                    <div className="col-sm-8 p-0">
                                        <input type="password" className="form-control p-1" id="inputPassword"
                                               placeholder="*****************" name = "repeatPassword"
                                               onChange={changeFieldHandle}/>
                                        {passwordErrorRender()}
                                    </div>

                                </div>
                            </div>
                            <div className="col-6 align-self-end mb-1">
                                <div>
                                    <h6 className="fs-6 fw-lighter text-wrap">Password must have at least 8 characters
                                        with
                                        at least one
                                        Capital letter, at least one lower case letter and at least one number or
                                        special
                                        character.
                                    </h6>
                                </div>
                                <div>
                                    <h6 className="fs-6 fw-lighter text-wrap">Please re-enter your password.</h6>

                                </div>
                            </div>
                        </div>
                        <hr className="">
                        </hr>
                        <div>
                            <div className="mt-3 row justify-content-evenly">
                                <div className="btn-group mx-1 col-4">
                                    <h6 className="fs-6 fw-lighter text-wrap">By clicking “Submit”, you agree to us
                                        processing your
                                        information in accordance with these terms.</h6>
                                </div>
                                <div className="btn-group mx-1 my-4 col-6">
                                    <button className="btn btn-primary opacity-25 col-3" type="button" onClick = {goToHomePage}>Cancel</button>
                                    <button  className="btn aad col-3" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Signup;

/*
 const history = useHistory()

    const [name, setName] = useLocalStorage("name", "");
    const [email, setEmail] = useLocalStorage("email", "");
    const [password, setPassword] = useLocalStorage("password", "");
    const [repeatPassword, setRepeatPassword] = useLocalStorage("repeatPassword", "");

    /*const history = useHistory()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("password", JSON.stringify(password));
        localStorage.setItem("repeatPassword", JSON.stringify(repeatPassword));
    }, [name, email, password, repeatPassword]);

    const saveFormData = async () => {

        const response = await fetch('/api/registration', {
            method: 'POST',
            body: JSON.stringify({name: '', email: '', password: ''})
        });
        if (response.status !== 200) {
            throw new Error(`Request failed: ${response.status}`);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent default submission
        if (password !== repeatPassword) {
            setPassword("");
            setRepeatPassword("");
            return ("Passwords do not match");
        }



        https://stackoverflow.com/questions/46445615/localstorage-getitemkey-sometimes-returns-null-in-a-react-app
        try {
            await saveFormData();
            alert('Your registration was successfully submitted!');
            setName('')
            setEmail('')
            setPassword('')
        } catch (e) {
            alert(`Registration failed! ${e.message}`);
        }
    }



    User Context

import React from "react";
import { useHistory } from "react-router-dom"
const UserContext = React.createContext();

function getUserFromLocalStorage() {
    return localStorage.getItem("authToken")
        ? JSON.parse(localStorage.getItem("authToken"))
        : { username: null, token: null };
}

function UserProvider({ children }) {
    const [user, setUser] = React.useState(getUserFromLocalStorage());
    const routerHistory = useHistory()
    const logoutHandler = () =>{
        localStorage.removeItem("authToken");
        setUser(user);
        routerHistory.push("/")
    }
    return (
        <UserContext.Provider
            value={{ user, setUser, logoutHandler  }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };

Login

import React, { useState, } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import "./Signup.css";
import { UserContext } from "../../context/user";


const Login = () => {
    const { user, setUser } = React.useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const history = useHistory()


    const loginHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };
        try {
            const { data } = await axios.post(
                "http://localhost:5000/api/auth/login",
                { email, password },
                config
            );
            user.authToken = data.token;
            setUser(user)
            history.push("/");
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error);
            }
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <div className="signin">
            <Link to='/'>
                <img src='/audible/logo.png' />
            </Link>
            <form onSubmit={loginHandler} className="form__container">
                <h3>Sign in with your Amazon account</h3>
                {error && <span className="error__message">{error}</span>}
                <span className='labels'>Email </span>
                <input
                    className="input__field"
                    type="email"
                    required
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    tabIndex={1}
                />
                <span className='signin__forgot'>Password{" "}
                    <Link className='links' to="/forgotpassword" >
              Forgot Password?
            </Link>
         </span>
                <input
                    className="input__field"
                    type="password"
                    required
                    id="password"
                    autoComplete="true"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    tabIndex={2}
                />
                <button type="submit" className="signin__btn">
                    Sign In
                </button>
                <span className='new__sign'>New to Amazon? </span>
                <Link to="/register">
                    <button className='signin__register'>
                        Create your amazon account
                    </button>
                </Link>

            </form>
        </div>
    );
};

export default Login;

Register

import { useState, } from "react";
import axios from "axios";
import { Link  } from "react-router-dom";
import { useHistory } from "react-router-dom"

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const routerHistory = useHistory()
    const registerHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        if (password !== confirmpassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Passwords do not match");
        }

        try {
            const { data } = await axios.post(
                "http://localhost:5000/api/auth/register",
                {
                    username,
                    email,
                    password,
                },
                config
            );

            localStorage.setItem("authToken", data.token);

            routerHistory.push('/login')
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error);
            }
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };
*!/

*/
