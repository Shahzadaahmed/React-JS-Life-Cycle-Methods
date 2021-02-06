// Note: Learning Life Cycle Methods...!
// Note: These are UNMOUNTING Method...!

import React, { Component } from 'react';
import Counter from "./counter";

class LifeCycleThree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggle: false
        }
    }

    // Function to toggle state...!
    toggleState = () => {
        this.setState({
            isToggle: !this.state.isToggle
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1> Learning Unmounting Life Cycle Methods! </h1>
                { (this.state.isToggle) ? (<Counter />) : (null)}
                <button onClick={this.toggleState}> Toggle </button>
            </React.Fragment>
        );
    }
}

export default LifeCycleThree;