import React, {useContext} from "react";
import {useHistory, Link} from "react-router-dom";
import {SecondContext} from "./FoundPets";


const FoundPetCard = ({foundPet}) => {

    let history = useHistory()

    const openProfile = event => {
        event.preventDefault()
        history.push(`/found/${foundPet.id}`)
    }


    return (
        <div className="col">
            <div className="card">
                <img src={foundPet.photo} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{foundPet.type}</h5>
                    <p className="card-text">{foundPet.location}</p>
                    <Link href="#" onClick={openProfile} className="tdn">Open profile</Link>
                </div>
            </div>
        </div>
    )
}

export default FoundPetCard