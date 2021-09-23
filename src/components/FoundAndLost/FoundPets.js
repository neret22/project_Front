import React, {Fragment, useEffect, useState, createContext} from "react";
import Loading from "../Loading";
import Error from "../Error";
import {NavLink} from "react-router-dom";
import FoundPetCard from "./FoundPetCard";

export const SecondContext = React.createContext(null)

const FoundPets = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [foundPets, setFoundPets] = useState(null)

    useEffect( () => {
        setTimeout( () => {
            fetch(`http://propets.telran-edu.de:8080/api/v1/lostfounds/found`)
                .then(response => response.json())
                .then(data => {
                    setFoundPets(data)
                    setIsLoading(false)
                })
                .catch(error => {
                    setError(error.message)
                })
        }, 250)
    }, [])

    const renderFoundPets = () => {
        if (isLoading && !error) {
            return (<Loading />)
        } else if (error) {
            return (<Error message={error} /> )
        } else
            return (foundPets.map((foundPet) => {
                return (
                    <FoundPetCard key={foundPet.id} foundPet={foundPet} />
                )
            }))
    }

   /* const getFoundPetById = (id) => {
        const idx = foundPets.findIndex(pet => pet.id === id)
        if (idx === -1) {
            return null
        }
        return foundPets[idx]
    }*/

    return (
        <section>
            <p className="lostOrFound">Found pets</p>
            <hr className="br"/>
            <p> Would you like to publish a post? <NavLink exact={true} to="/signup">JOIN</NavLink> to our community!</p>
            <div className="row">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {renderFoundPets()}
                </div>
            </div>
        </section>
    )
}

export default FoundPets
