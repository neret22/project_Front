
import React, {Fragment, useContext} from "react";
import {NavLink} from "react-router-dom";
import logo_blue from './images/logo_blue.png';
import dog_icon from './images/dog_icon.png';
import {GlobalContext} from "../../App";

const General = () => {
    const {activeUser, logOut} = useContext(GlobalContext)

    return (

        <Fragment>
            <header>
                <div className="w-75 mx-auto bg-white">
                    <div className="row ps-5">
                        <div className="col-5 ps-5 m-3 ">
                            <img src={logo_blue}
                                 className="rounded float-start ps-5"
                                 alt="..."/>
                        </div>
                    </div>
                </div>
            </header>
            {/*section 1*/}
            <div className="w-75 mx-auto">
                <div className="row g-0 position-relative">
                    <div className="col aad pt-lg-5 pb-lg-5  top-0 start-0">
                        <NavLink to="/">
                            <button className="rounded-end rounded-3 col-12 btn text-white fs-5 text-end  mt-1 mb-1 " type="button">
                                Home
                            </button>
                        </NavLink>
                        <NavLink to="/Lost">
                            <button className="rounded-end col-12 btn text-white fs-5 text-end  mt-1 mb-1 " type="button">
                                Lost
                            </button>
                        </NavLink>
                        <NavLink to="/Found">
                            <button className="rounded-end col-12 btn text-end text-white fs-5 mt-1 mb-4 " type="button">
                                Found
                            </button>
                        </NavLink>
                        <h3 className=" fs-3  text-white text-end">SERVICE</h3>
                        <hr className="col-8 bg-light float-end "/>
                        <NavLink to="/">
                            <button className="rounded-end rounded-3 col-12 btn text-white fs-5 text-end  mt-1 mb-1 " type="button">
                                Hotels
                            </button>
                        </NavLink>
                        <NavLink to="/Lost">
                            <button className="rounded-end col-12 btn text-white fs-5 text-end  mt-1 mb-1 " type="button">
                                Walking
                            </button>
                        </NavLink>
                        <NavLink to="/Found">
                            <button className="rounded-end col-12 btn text-end text-white fs-5 mt-1 mb-1 " type="button">
                                Fosterings
                            </button>
                        </NavLink>
                        <NavLink to="/Found">
                            <button className="rounded-end col-12 btn text-end text-white fs-5 mt-1 mb-4 " type="button">
                                VetHelp
                            </button>
                        </NavLink>
                        <hr className="col-8 bg-light float-end "/>
                    </div>
                    <div className="col-6">
                        <h2 className="fs-6 text-decoration-underline add-text m-3">Your new post! Simply text, add photo and publish.</h2>
                        <form>
                            <div className="mb-3 mx-3">
                                <label htmlFor="exampleInputEmail1" className="">Title</label>
                                <input type="email" className="p-2 form-control border-aad" id="exampleInputEmail1"
                                       placeholder="The quick, brown fox jumps"/>

                            </div>
                            <div className="mb-3 mx-3">
                                <label className="">Text</label>
                                <div id="Text" className="form-text add-text">up to 1500 char
                                </div>
                                <textarea className="p-2 form-control add-border text-wrap text-break" id="exampleInputEmail1"
                                       />
                            </div>
                            <div className="mb-3 mx-3">
                                <label htmlFor="exampleInputEmail1" className="">Photo</label>
                                <input type="email" className="form-control add-border" id="exampleInputEmail1"
                                       placeholder="Photo url"/>

                            </div>

                            <div className="d-flex justify-content-between mt-lg-5 p-4 align-middle">
                                <p className = "add-text text-center align-middle my-2"><img src={dog_icon}
                                                                                             className="rounded float-start col-4"
                                                                                             alt="..."/>John Goodboy</p>
                                <button type="submit" className="btn aad col-4 my-3">Publish</button>
                            </div>

                        </form>
                    </div>
                    <div className="col aad">
                        <hr className="col-8 bg-light float-begin"/>
                        <div className="d-flex justify-content-between col-7 align-middle">
                            <img src={activeUser ? activeUser.avatar : 'Some photo'} className="rounded float-start col-4" alt="some photo"/>
                            <p className = "text-white my-auto">{activeUser ? activeUser.fullName : "none"}</p>
                        </div>
                        <hr className="col-8 bg-light float-begin"/>
                        <p className ="text-white text-center" onClick={logOut}> Logout</p>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}
export default General;
