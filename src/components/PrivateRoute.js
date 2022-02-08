import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ payh: path, component: Component }) => (
  <Route path={path} render={(props) => (
    sessionStorage.uuid && sessionStorage.token
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

export default PrivateRoute