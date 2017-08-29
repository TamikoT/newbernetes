import React from "react";
import ComponentPod from "./component_pod";

class ComponentNode extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            pods: this.props.pods
        }        
    }

    renderList() {
        console.log(this.state.pods);
        // iterate over each node for the pods
        return this.state.pods.map((pod) => {
            return (
                <ComponentPod 
                    onPodSelect={this.state.onPodSelect}
                    pod={pod}
                />
            );
        });
    }

    render() {
        return(
            <div className="component-node-div">
                NODE
                {this.renderList()}  
            </div>
        )
    }
};

export default ComponentNode;