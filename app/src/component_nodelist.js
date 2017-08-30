import React from 'react';
import ComponentNode from './component_node';
import ComponentPod from './component_pod';
import data from './simpledata.json'

class NodeList extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            nodes: this.props.nodes,
            isScheduled: false
        };
        // binding for it to work in render 
        this.btnClick = this.btnClick.bind(this);
    }

    btnClick(event) {
        alert('your scheduler is at work!');
        this.setState(prevState => ({
            isScheduled: !prevState.isScheduled
        }), () => {
            this.renderList();
            console.log(this.state.isScheduled);
        });
        this.render();
    
    }

    renderList() {
        if (this.state.isScheduled) {
            return Object.keys(this.state.nodes).map((nodeName, i) => {
                return (
                    <div>
                        <ComponentNode
                            pods={this.state.nodes[nodeName].pods}
                        />
                    </div>
                )
            })
        } else {
            return Object.keys(this.state.nodes).map((nodeName, i) => {
                return (
                    <div>
                        <ComponentNode
                            pods={[]}
                        />
                    </div>
                )
            })
        };
    }

    render() {
        console.log('render called');
        console.log(this.state.isScheduled);
        return (
            <div>
                <div>
                    {this.renderList()}
                </div>
                <div>
                    <button onClick={this.btnClick} className="button-deploy mdl-button mdl-js-button mdl-button--raised">
                        {this.state.isScheduled ? 'KILL' : 'DEPLOY'}
                    </button>
                </div>
            </div>
        )
    }
};

export default NodeList;
