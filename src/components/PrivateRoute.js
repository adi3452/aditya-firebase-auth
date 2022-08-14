import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Navigate to="/login" />
      }}
    />
  )
}


//Methods tried

// import React from 'react';
// import {Route,Navigate} from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext"

//  function PrivateRoute({ element, path }) {
//    //const authed = isauth() // isauth() returns true or false based on localStorage
//    const { currentUser } = useAuth()

//    const ele = currentUser === true ? element : <Navigate to="/dashboard"  />;
//    return <Route path={path} element={ele} />;
//  }
//  export default PrivateRoute