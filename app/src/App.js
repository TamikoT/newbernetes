import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentNode from './component_node'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pods: [1, 2, 3],
      selectedPod: null
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Newbernetes</h2>
        </div>
        <p className="App-intro">
          Kubernetes Visualized
        </p>
        <div className="component-cluster-div">
          <ComponentNode
            onPodSelect={selectedPod => this.setState({selectedPod})}
            pods={this.state.pods}
          />
         </div> 
      </div>
    );
  }
}

export default App;
