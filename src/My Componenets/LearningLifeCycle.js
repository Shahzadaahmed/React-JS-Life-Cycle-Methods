// Note: Learning Life Cycle Methods...!
// Note: These are MOUNTING Methods...!

import React, { Component } from 'react';

class LifeCycle extends Component {
    // Method 1:
    constructor(props) {
        super(props);

        this.state = {
            favoritecolor: "red"
        }
        console.log("constructor is running!");
    }

    // Method 2:
    // static getDerivedStateFromProps(props, state) {
    //     // console.log(props, state);
    //     console.log("getDerivedStateFromProps is running!");
    //     return {
    //         favoritecolor: props.favCol
    //     }
    // }

    // Method 4:
    // componentDidMount() {
    //     console.log("componentDidMount is running!");
    //     setTimeout(() => {
    //         this.setState({
    //             favoritecolor: "Yellow"
    //         });
    //     }, 1000);
    // }

    // Method 3:
    render() {
        console.log("render is running!");
        return (
            <React.Fragment>
                <h1> Hi, My favourite color is {this.state.favoritecolor}. </h1>
            </React.Fragment>
        );
    }
}

export default LifeCycle;