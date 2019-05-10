import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Rooms from './components/Rooms/Rooms';
import SingleRoom from './components/Rooms/SingleRoom';
import Error from './components/Errors/Error'
import Navbar from './components/Layout/Navbar'
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/" exact component={Rooms} />
          <Route path="/rooms/:slug" exact component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </>
    )
  }
}

export default  App; 