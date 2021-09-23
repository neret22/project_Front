import React, {createContext, Fragment, useState} from "react";
import {useHistory} from 'react-router-dom'
import {NavLink} from "react-router-dom";
import dog from './images/Image2.png';
import logo from './images/logo.png';
import pets23 from './images/8347.png';




const Home = () => {

    let history = useHistory()

    let [editMode, setEditMode] = useState(null)

    const goToLostPets = event => {
        event.preventDefault()
        setEditMode(false)
        history.push('/lost')
    }

    const goToFoundPets = event => {
        event.preventDefault()
        setEditMode(true)
        history.push('/found')
    }

    const goToSignInPage = event => {
        event.preventDefault()
        history.push('/signin')
    }

    return (
        <Fragment>
            <header>
                <div className="container w-75 mx-auto aad">
                    <div className="row justify-content-around">
                        <div className="col-4 mt-3">
                            <img src={logo}
                                 className="img-fluid"
                                 alt="..."/>
                        </div>
                        <button onClick={goToSignInPage} className="btn btn-outline-light col-2 m-2" type="button" >Sign in</button>
                    </div>
                </div>
            </header>
            {/*section 1*/}
            <div>
                <div className=" w-75 mx-auto">
                    <div>
                        <div className="row">
                            <div className="col my-auto">
                                <div>
                                    <p className="fs-2 float-end fw-bolder ">Welcome to your <br/><span
                                        className="aad-text">pawfessional</span><br/> community</p>
                                </div>
                                <div className="d-grid gap-2 col-10 float-start mb-1">
                                    <button
                                        className="btn btn-danger text-body fw-bolder rounded-pill"
                                        type="button"
                                        onClick={goToLostPets}>
                                        I Lost My Pet
                                    </button>
                                </div>
                                <div className=" d-grid gap-2 col-10 float-start mt-1 ">
                                    <button
                                        className=" mr-n5 btn aad  text-body fw-bolder rounded-pill"
                                        type="button"
                                        onClick={goToFoundPets}>
                                        I found a pet!
                                    </button>
                                </div>
                                <div>
                                    <p className="fs-6 float-end fw-lighter mt-3"> I’m okay, just want to
                                        <NavLink to="/signup">
                                            <a href="#" className="link-info">
                                                JOIN
                                            </a>
                                        </NavLink> the
                                        pawsome
                                        community!
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="container  float-start">
                                    <img src={dog} className="rounded float-start w-75" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* section2 */}
            <div className="container w-75 aad">
                <div className="<!-- container w-50 pt-4 pb-3 -->">
                    <p className="fs-4 text text-center text-white p">Our fluffy space for lovers, admirers, dads and
                        moms
                        of
                        our
                        four-legged, winged, tailed guys.</p>
                </div>
            </div>
            {/*section3 */}
            <div className="container w-75 mx-auto">
                <div className="clearfix">
                    <img src={pets23} className="col-md-5 float-md-start w-50 " alt="..."/>
                        <div className="container mt-5 ml-5">
                            <h2 className="fs-5 aad-text pt-5">Here is collected everything that your pet
                                needs:</h2>
                            <div className="container">
                                <ul>
                                    <li>
                                        professional veterinarian tips;
                                    </li>
                                    <li>
                                        useful information about education and care;
                                    </li>
                                    <li>
                                        information about pet-sitting and walking service;
                                    </li>
                                    <li>
                                        and of course, great communication with new friends in your social network!
                                    </li>
                                </ul>
                                <p>Make an account and <NavLink to="/signup"><a href="#"
                                                                         className="link-info">JOIN</a></NavLink> to us!</p>
                            </div>
                        </div>
                </div>
            </div>
            {/* footer*/}
            <div className="container w-75 mx-auto aad">
                <div className="row justify-content-around">
                    <div className="col-4 mt-5">
                        <img src={logo}
                             className="img-fluid"
                             alt="..."/>
                    </div>
                    <div className="col-4 m-4">
                        <p className="text-end fw-lighter text-white lh-1 pt-3 pb-3">
                            1600 Amphitheatre Pkwy <br/> Mountain View, CA 94043, USA
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Home;