import React from "react";
import ComponentNode from "./component_node";

class ComponentMaster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        };
    }
    render() {
        return (
            <section className="component-master">
                <p>MASTER</p>
                <div className="test-border">
                    API SERVER
                </div>
                <div className="test-border">
                    Controller Manager
                </div>
                <div className="test-border">
                    Scheduler
                </div>
                <div className="test-border">
                    etcd
                </div>
            </section>
        );
    }
}

export default ComponentMaster;