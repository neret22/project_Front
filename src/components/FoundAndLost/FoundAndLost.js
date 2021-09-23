import React, {Fragment, useState, useEffect} from "react";
import {useHistory, useLocation} from 'react-router-dom'
import dog_icon from '../Home/images/dog_icon.png';
import logo_blue from "../Home/images/logo_blue.png";
import LostPets from "./LostPets";
import FoundPets from "./FoundPets";
import logo from "../Home/images/logo.png";

const FoundAndLost = () => {

    let location = useLocation()

    const [newEditMode, setNewEditMode] = useState(false)

    useEffect( () => {
        if (location.pathname =='/lost'){
            setNewEditMode(false)
        } else {
            setNewEditMode(true)
        }
    },[])

    const changeToLost = event => {
        event.preventDefault()
        setNewEditMode(false)
        history.push('/lost')
    }

    const changeToFound = event => {
        event.preventDefault()
        setNewEditMode(true)
        history.push('/found')
    }

    let history = useHistory()

    const goHomePage = event => {
        history.push('/')
    }

    return (
        <Fragment>
            <header>
                <div className="container w-75 mx-auto">
                    <div className="row ps-5">
                        <div className="col-4 mt-3">
                            <img src={logo_blue}
                                 className="img-fluid pointer"
                                 alt="..." onClick={goHomePage}/>
                        </div>
                    </div>
                </div>
            </header>
            <div className="w-75 mx-auto">
                <div className="row g-0 position-relative">
                    <div className="col aad pt-lg-5 pb-lg-5  top-0 start-0">
                        <button
                            className="rounded-end col-12 btn text-white fs-5 text-end  mt-1 mb-1 "
                            type="button"
                            onClick={changeToLost}>
                            Lost
                        </button>
                        <button
                            className="rounded-end col-12 btn text-end text-white fs-5 mt-1 mb-4 "
                            type="button"
                            onClick={changeToFound}>
                            Found
                        </button>
                        <hr className="col-8 bg-light float-end "></hr>
                    </div>
                    <div className="col-6 ms-2">
                        {newEditMode ? <FoundPets /> : <LostPets /> }
                    </div>

                    <div className="col aad">
                    </div>
                </div>
            </div>

        </Fragment>

    )
}
export default FoundAndLost;
