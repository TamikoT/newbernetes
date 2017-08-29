import React from "react";
import ComponentNode from './component_node';
import ComponentPod from "./component_pod";
import data from './simpledata.json'

class NodeList extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    renderList() {
        var nodes = this.state.data.nodes;
        return Object.keys(nodes).map((nodeName) => {
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
