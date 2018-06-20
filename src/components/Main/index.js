import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Servers from '../../containers/Servers';
import Signin from '../../containers/Signin';

const Main = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/servers" component={Servers} />
      <Route path="*" render={() => (<Redirect to="/" />)} /> 
    </Switch>
)}

export default withRouter(Main);
