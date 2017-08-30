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
                <h3 className="mdl-card__title-text">Kubernetes Scheduling</h3>
              </div>
              <div className="mdl-card__supporting-text">
                <p>
                  On our running cluster, we can task the scheduler to assign an unassigned pod to a node. The scheduler takes into account resource requirements of the pods and the availability of CPU and RAM on each node.
                </p>
                <ul>
                  <li>
                    <strong>Master</strong> (control plane): makes global decisions about the cluster and detects and responds to events
                  </li>
                  <li>
                    <strong>Node</strong>: worker machine (physical or VM) in a cluster
                  </li>
                  <li>
                    <strong>Pod</strong>: collection of containers (like Docker) that executes together
                  </li>
                </ul>
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  MORE
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
