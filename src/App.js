import Head from './component/head';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './component/home';
import BloodInput from './component/blood';
import Auth from './component/auth';
import Login from './component/login';
import Register from './component/register';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Auth>
          <Head/>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/input" exact component={BloodInput}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/register" exact component={Register}></Route>
          </Switch>
        </Auth>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
