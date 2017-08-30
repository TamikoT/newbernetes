import React from "react";
import ComponentNode from './component_node';
import ComponentPod from "./component_pod";
import data from './simpledata.json'

class NodeList extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            nodes: this.props.nodes
        };
    }

    renderList() {
        var nodes = this.state.nodes
        return Object.keys(nodes).map((nodeName, i) => {
            return (
                <div>
                    <ComponentNode
                        pods={nodes[nodeName].pods}
                    > 
                    </ComponentNode>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
};

export default NodeList;
