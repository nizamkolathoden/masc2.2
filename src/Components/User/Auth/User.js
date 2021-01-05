import React, { useEffect, useReducer, useContext, createContext } from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import UserAuth from "./UserAuth";
import Landing from '../Landing'
import Profile from '../LandingComponents/Profile/Profile'
import About from '../LandingComponents/About/About'
import { intialState, reducer } from '../../../reducer/useReducer'
export const userContext = createContext();

const Routing = () => {
  const history = useHistory()

  const { dispatch } = useContext(userContext)

  useEffect(() => {


    const user = JSON.parse(localStorage.getItem('user_majlis'));
    if (user) {
      dispatch({ type: 'USER', payload: user })
      console.log(user);

    } else {
      history.push('/Auth')
    }
  }, [])


  return (
    <div>
      <Route path="/Auth">
        <UserAuth />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Profile">
        <Profile />
      </Route>
      <Route exact path="/">
        <Landing />
      </Route>
    </div>
  )
}



const User = () => {

  const [state, dispatch] = useReducer(reducer, intialState)

  return (
    <div>
      <userContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </userContext.Provider>


    </div>

  );
};

export default User;
