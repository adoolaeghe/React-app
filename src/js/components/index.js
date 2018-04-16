import React from "react";
import Home from "./Home/home"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory,
  BrowserRouter,
  Switch
} from 'react-router-dom'

export default class Main extends React.Component {

  constructor() {
    super();
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
  }

  render() {

    const HomePage = (props) => (
      <Home
        props= {props}
        audioContext={this.audioContext}
        database={this.database}
        storage={this.storage}
      />
    )

    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <Switch>
            <Route exact path="/" render={props => <HomePage {...props} />} />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}