import React from "react";
import ComponentMaster from './component_master';
import ComponentNode from './component_node';
import data from './simpledata.json'
import NodeList from './nodelist.js'

class ComponentCluster extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            nodes: [1, 2],
            pods: [1, 2, 3, 4],
            selectedPod: null,
            data: data
        };
    }

    render() {
        return (
            <div>
                <div className="component-node-div">
                    <ComponentMaster/>
                </div>
                <div>
                    <NodeList
                        data={this.state.data}
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