import React, {Fragment, useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import logo_blue from "../Home/images/logo_blue.png";

const LostPetProfile = () => {

    //const {getFoundPetById} = useContext(SecondContext)
    const {id} = useParams()
    const [pet, setPet] = useState()
    const history = useHistory()


    useEffect( () => {
        setTimeout( () => {
            fetch(`http://propets.telran-edu.de:8080/api/v1/lostfounds/lost/${id}`)
                .then(response => response.json())
                .then(data => {
                    setPet(data)
                })
                .catch(error => {
                    console.log("There is no such pet")
                })
        }, 500)
    })

    /*   useEffect(() => {
                setPet(getFoundPetById(+id))
        }, [])


        const getFoundPetById = (id) => {
            const idx = foundPets.findIndex(pet => pet.id === id)
            if (idx === -1) {
                return null
            }
            return foundPets[idx]
        }*/


    const changeToLost = event => {
        event.preventDefault()
        history.push('/lost')
    }

    const changeToFound = event => {
        event.preventDefault()
        history.push('/found')
    }

    const goHomePage = event => {
        history.push('/')
    }

    const renderProfile = () => {
        if (!pet) {
            return (<div>Loading...</div>)
        }
        return (
            <Fragment>
                <p className="lostOrFound">Found pet: {pet.type}</p>
                <hr className="br"/>
                <div className="row">
                    <div className="col-6 img-response">
                        <img src={pet.photo}
                             className="img-found"
                             alt="..."/>
                    </div>
                    <div className="col-6"><p className="lostOrFound">Cat: {pet.type}</p>
                        <p className="lostOrFound">Color: {pet.color}</p>
                        <p className="lostOrFound">Sex: {pet.sex}</p>
                        <p className="lostOrFound">Height: {pet.height}</p>
                        <p className="lostOrFound">Distinctive features: {pet.disFeatures}</p>
                    </div>
                    <p className="lostOrFound">Description:: {pet.description}</p>
                    <p className="lostOrFound">Owner: {pet.owner}</p>
                    <p className="lostOrFound">Phone: {pet.phone}</p>
                    <p className="lostOrFound">e-mail: {pet.email}</p>
                </div>
            </Fragment>
        )
    }

    return (
        <section>
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
                    <div className="col-6">
                        <div className="container">
                            <div className="card w-100">
                                {renderProfile()}
                            </div>
                        </div>
                    </div>
                    <div className="col aad">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LostPetProfile