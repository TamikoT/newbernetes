import React from "react";

const ComponentPod = ({ pod, onPodSelect }) => {
    const podName = "POD"; // placeholder text

    return (
        <div onClick={() => onPodSelect(pod)} className="component-pod-div">
            <div className="card">
                <div className="card-content">{podName}</div>
            </div>
        </div>
    );
};

export default ComponentPod;