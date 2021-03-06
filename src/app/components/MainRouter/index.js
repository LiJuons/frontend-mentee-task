import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ServerPage from '../../containers/ServerPage';
import SigninPage from '../../containers/SigninPage';
import SingleServer from '../../containers/SingleServer';

const MainRouter = (props) => (
    <Switch>
      <Route exact path="/" component={SigninPage} />
      <Route exact path="/servers" component={ServerPage} />
      <Route path='/servers/:id' component={SingleServer} />
      <Route path="*" render={() => (<Redirect to="/" />)} />
    </Switch>
);

export default MainRouter;
