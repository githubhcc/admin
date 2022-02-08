import React from 'react';
import PrivateRoute from '../../components/PrivateRoute';
import Setting from '../setting/setting';
import Brand from '../brand/brandCenter';
import { Switch } from 'react-router-dom'


class Home extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/setting" component={Setting} />
        <PrivateRoute path="/brand" component={Brand} />
        <PrivateRoute path="/" component={Brand} />
      </Switch>
    )
  }
}

export default Home;