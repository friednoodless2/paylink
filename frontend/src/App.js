import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar";
import Info_Req from "./components/createlink/info_req";
// import Display_Check from "./components/createlink/display_check";
import { withCookies } from 'react-cookie';
import Home from './pages/Home.jsx'
import LoggedIn from './pages/LoggedIn.jsx'

 

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
              {/* <Route path="/LoggedInModal" component = {LoggedInModal} /> */}
              <Route path="/LoggedIn" render={() => (<LoggedIn cookies={this.props.cookies}/>)} />  
              <Route path="/" render={() => (<Home cookies={this.props.cookies}/>)} />
          </Switch>
        </div>
      </Router>

    );
  };
};


export default withCookies(App);
