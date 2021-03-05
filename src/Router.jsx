import React from 'react';
import { Route, Switch } from 'react-router';
import Main from './components/Main/Main';
import Help from './components/Help/Help';

const Router = () => {
    return (
        <Switch>
            <Route exact path="(/)?" component={Main} />
            <Route exact path="/help" component={Help} />
        </Switch>
    );
};

export default Router;
