// Note: Counter component...!

import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    // Declaring global variable...!
    handleInterval;

    componentDidMount() {
        console.log("component is mounted!");
        this.handleInterval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    }

    // Note: Method 1:
    componentWillUnmount() {
        clearInterval(this.handleInterval);
        console.log("component is unmounted!");
    }

    render() {
        return (
            <React.Fragment>
                <h1> {this.state.count} </h1>
            </React.Fragment>
        );
    }
}

export default Counter;