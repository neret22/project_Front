import React, {useState, useContext} from 'react';
import {Fragment} from 'react';
import logo_blue from './images/logo_blue.png'
import {useHistory} from "react-router-dom";
import {GlobalContext} from "../../App";


const initialUser = {
    email: '',
    password: ''
}

const SignIn = () => {
    const cntx = useContext(GlobalContext)
    const history = useHistory()
    const [user, setUser] = useState(initialUser)

    const changeFieldHandle = (event) => {
        setUser({
            ...user, [event.target.name]: event.target.value
        })
    }

    const submitHandle = async (e) => {
        e.preventDefault()
        await cntx.logIn(user)
        if (localStorage.key('apiKeyToken')){
            history.push('./general')}
        else{
            alert('No user found')
        }
    }

    const goToHomePage = (event) => {
        event.preventDefault()
        history.push('./')
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
                        <h2 className=" fs-4 aad-text"><span className="fx-bold">Welcome!</span> Please sign in / sign
                            up to continue
                            or </h2>
                    </div>
                    <div className="btn-group mx-auto col-12">
                        <button onClick={() => history.push('./signup')} className="btn aad col-4" type="button">Sign
                            up
                        </button>
                        <button className="btn btn-primary col-4" type="button">Sign in</button>
                    </div>
                    <form onSubmit = {submitHandle}>
                    <div className="row justify-content-between">
                        <div className="col-6 p-5">
                            <div className="my-4 row justify-content-around">
                                <label for="inputPassword" className="col-sm-4 col-form-label text-end">Email</label>
                                <div className="col-sm-8 p-0">
                                    <input type="text" className="form-control p-1" id="inputPassword" name="email"
                                           placeholder="helenjohnson@gmail.com"
                                           onChange={changeFieldHandle}/>
                                </div>
                            </div>
                            <div className="my-4 row justify-content-around">
                                <label for="inputPassword"
                                       className="col-sm-4 col-form-label text-end">Password:</label>
                                <div className="col-sm-8 p-0">
                                    <input type="password" className="form-control p-1" id="inputPassword"
                                           name="password"
                                           placeholder="*****************"
                                           onChange={changeFieldHandle}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 align-self-end mb-1">
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
                                    <button className="btn aad col-3" type="button" onClick = {goToHomePage}>Cancel</button>
                                    <button className="btn btn-primary col-3" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </Fragment>

    )
}

export default SignIn;




/*

const Signin = () => {
    const history = useHistory()
    const [existedEmail, setExistedEmail] = useLocalStorage("existedEmail", "");
    const [existedPassword, setExistedPassword] = useLocalStorage("existedPassword", "");
    return (


        * ! /


    const Signin = () => {


        return (
            <div>Sign in</div>
        )
    }

    export default Signin;
*!/
*/
