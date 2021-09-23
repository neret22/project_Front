import React, {Fragment, useEffect, useState, createContext} from "react";
import Loading from "../Loading";
import Error from "../Error";
import {NavLink} from "react-router-dom";
import LostPetCard from "./LostPetCard";

export const FirstContext = React.createContext(null)

const LostPets = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [lostPets, setLostPets] = useState(null)

    useEffect( () => {
        setTimeout( () => {
            fetch(`http://propets.telran-edu.de:8080/api/v1/lostfounds/lost`)
                .then(response => response.json())
                .then(data => {
                    setLostPets(data)
                    setIsLoading(false)
                })
                .catch(error => {
                    setError(error.message)
                })
        }, 1000)
    })

    const renderLostPets = () => {
        if (isLoading && !error) {
            return (<Loading />)
        } else if (error) {
            return (<Error message={error} /> )
        } else
            return (lostPets.map((lostPet) => (<LostPetCard key={lostPet.id} lostPet={lostPet} />)))
    }


    return (
        <Fragment>
            <p className="lostOrFound">Lost pets</p>
            <hr className="br"/>
            <p> Would you like to publish a post? <NavLink exact={true} to="/signup">JOIN</NavLink> to our community!</p>
            <div className="row">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {renderLostPets()}
                </div>
            </div>
        </Fragment>
    )
}

export default LostPets