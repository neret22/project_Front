/*


import React, {Fragment, useContext, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import logo_blue from './images/logo_blue.png';
import dog_icon from './images/dog_icon.png';
import users from "../../data/users";
import {GlobalContext} from "../../App";

const General = () => {
    const cntx = useContext(GlobalContext)
    const [users, setUsers] = useState(null)
    const [user, setUser] = useState()

    const goToHotels = (event) => {
        event.preventDefault()
        history.push('./Hotels')
    }
    const goToWalkingPage = (event) => {
        event.preventDefault()
        history.push('./Walking')
    }
    const goToFosterings = (event) => {
        event.preventDefault()
        history.push('./Forsterings')
    }
    const goToVetHelp = (event) => {
        event.preventDefault()
        history.push('./Vethelp')
    }
    useEffect(() => {
        fetch(`http://propets.telran-edu.de:8080/api/v1/users/`)
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            })
            .catch(error => {
                (error.message)
            }), []);

    const GetActiveUserByID = (id) => {
        const idx = users.findIndex(user => user.id === localStorage.getItem('activeUser'))
        if (idx === -1) {
            return null
        }

        return users[idx]
        setUser(users[idx])
    }

    const RenderActiveUser = () => {
        if (!user) return null
        return (
            <img src={user.photo} className="rounded float-start col-4" alt="..."/>
            <p className="text-white my-auto">{user.name}</p>
    )
    }

}
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
            {/!*section 1*!/}
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
                        <hr className="col-8 bg-light float-end "></hr>
                        <NavLink >
                            <button className="rounded-end rounded-3 col-12 btn text-white fs-5 text-end  mt-1 mb-1 " type="button"
                                    onClick = {goToHotels}>
                                Hotels
                            </button>
                        </NavLink>
                        <NavLink >
                            <button className="rounded-end col-12 btn text-white fs-5 text-end  mt-1 mb-1 " type="button"
                                    onClick = {goToWalkingPage}>
                                Walking
                            </button>
                        </NavLink>
                        <NavLink >
                            <button className="rounded-end col-12 btn text-end text-white fs-5 mt-1 mb-1 " type="button"
                                    onClick = {goToFosterings}>
                                Fosterings
                            </button>
                        </NavLink>
                        <NavLink >
                            <button className="rounded-end col-12 btn text-end text-white fs-5 mt-1 mb-4 " type="button"
                                    onClick = {goToVetHelp}>
                                VetHelp
                            </button>
                        </NavLink>
                        <hr className="col-8 bg-light float-end "></hr>
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
                                <input type="email" className="p-2 form-control add-border text-wrap text-break" id="exampleInputEmail1"
                                       placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."/>
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
                        <hr className="col-8 bg-light float-begin"></hr>

                        <div className="d-flex justify-content-between col-7 align-middle">
                            <img src={dog_icon} className="rounded float-start col-4" alt="..."/>
                            <p className = "text-white my-auto">Anna Smith</p>
                        </div>
                        <div className="d-flex justify-content-between col-7 align-middle">

                                    <img src={dog_icon} className="rounded float-start col-4" alt="..."/>
                                    <p className = "text-white my-auto">Name</p>


                        </div>
                        <hr className="col-8 bg-light float-begin"></hr>
                        <button className ="text-white text-center" onClick={cntx.logOut()}>Logout</button>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}
export default General;
*!/
*!/
*/
