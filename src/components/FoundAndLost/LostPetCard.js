import React from "react";
import {useHistory} from "react-router-dom";


// useParams
const LostPetCard = ({lostPet}) => {

    let history = useHistory()


    const openProfile = event => {
        event.preventDefault()
        history.push(`/lost/${lostPet.id}`)
    }

    return (
        <div className="col">
            <div className="card">
                <img src={lostPet.photo} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{lostPet.nick}</h5>
                    <p className="card-text">{lostPet.location}</p>
                    <a href="#" onClick={openProfile} className="tdn">Open profile</a>
                </div>
            </div>
        </div>
    )
}

export default LostPetCard