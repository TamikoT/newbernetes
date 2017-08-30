import React from "react";
import ComponentMaster from './component_master';
import ComponentNode from './component_node';
import jsondata from './simpledata.json'
import NodeList from './component_nodelist.js'

class ComponentCluster extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            nodes: jsondata["nodes"],
            selectedPod: null,
            data: jsondata
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
                        data={this.state.datas}
                        nodes={this.state.nodes}
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