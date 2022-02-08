import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import { HashRouter as Router,Switch, Route } from 'react-router-dom';
import Login from './routes/login/login';
import Index from './routes/home';


class App extends React.Component {
  render() {
    return (
      <>
      <Switch>
        <Route path='/Login' component={Login} />
        <PrivateRoute path='/' component={Index} />
      </Switch>
      </>
    )
  }
}

export default App;