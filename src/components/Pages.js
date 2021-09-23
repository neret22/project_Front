import React, {useContext} from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./Home/Home.js";
import FoundAndLost from "./FoundAndLost/FoundAndLost";
import Design from "./Home/Design";
import Signup from "./SignInUp/Signup";
import Signin from "./SignInUp/Signin";
import LostPets from "./FoundAndLost/LostPets";
import FoundPets from "./FoundAndLost/FoundPets";
//import Tryout from "./SignInUp/Tryout";
import {GlobalContext} from "../App";
import LostPetProfile from "./FoundAndLost/LostPetProfile";
import FoundPetProfile from "./FoundAndLost/FoundPetProfile";


const Pages = () => {
  const {auth} = useContext(GlobalContext)
    const renderAuthPath = () => {
        if (auth) {
        return(
            <Route  path = "/general">
                <Design/>
            </Route>
        )
        }
    }
    return(
        <Switch>
            <Route exact = {true} path = "/">
                <Home/>
            </Route>
            <Route  path = "/foundandlost">
                <FoundAndLost />
            </Route>
            <Route exact={true} path = "/lost">
                <FoundAndLost />
            </Route>
            <Route  path = "/lost/:id">
                <LostPetProfile />
            </Route>
            <Route  exact={true} path = "/found">
                <FoundAndLost />
            </Route>
            <Route  path = "/found/:id">
                <FoundPetProfile />
            </Route>
            <Route  path = "/signup">
                <Signup/>
            </Route>
            <Route  path = "/signin">
                <Signin/>
            </Route>
            <Route  path = "/general">
                <Design/>
            </Route>
          {/*  {renderAuthPath()}*/}

        </Switch>
    )
}

export default Pages;