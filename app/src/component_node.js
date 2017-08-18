import React from "react";
import ComponentPod from "./component_pod";

const ComponentNode = (props) => {
    // iterate over each node for the pods
    const nodePods = props.pods.map((pod) => {
        return (
            <ComponentPod>
                onPodSelect={props.onPodSelect}
                pod={pod}
            </ComponentPod>
        );
    });

    return (
        <div className="component-node-div">
            NODE
            {nodePods}
        </div>
    )
};

export default ComponentNode;