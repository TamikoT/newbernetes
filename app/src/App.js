import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentCluster from './component_cluster';


class App extends Component {
  render() {
    return (
      <div className="App">
       
        <div className="left-window">
          <ComponentCluster></ComponentCluster>
        </div>

        <div className="right-window">
          <section className="text-column">
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
              <img src={logo} className="App-logo" alt="logo" />
              <div className="mdl-card__title">
                <h3 className="mdl-card__title-text">Welcome</h3>
              </div>
              <div className="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  Get Started
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
