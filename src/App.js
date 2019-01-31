import React, { Component } from 'react';
import './App.css';
import "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import {Home, Profile} from "./search.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = "App">
          <h1>Pony Search</h1>
            <div>
              <Route exact path = "/" component = {Home} />
              <Route path = "/profile" component = {Profile} />
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
