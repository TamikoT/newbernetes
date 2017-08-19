import React from "react";
import ComponentNode from './component_node';
import ComponentMaster from './component_master';

class ComponentCluster extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nodes: [1, 2],
            pods: [1, 2, 3, 4],
            selectedPod: null
        };
    }

    // TODO: map array of nodes to show ComponentNode

    render() {
        return (
            <div>
                <div className="component-node-div">
                    <ComponentMaster></ComponentMaster>
                </div>
                <div>
                    <ComponentNode
                        onPodSelect={selectedPod => this.setState({ selectedPod })}
                        pods={this.state.pods}
                    />
                </div>
                <div>
                    <button className="button-deploy mdl-button mdl-js-button mdl-button--raised">deploy</button>
                </div>
            </div>
        );
    }
}

export default ComponentCluster;