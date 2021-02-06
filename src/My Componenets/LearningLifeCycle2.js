// Note: Learning Life Cycle Methods...!
// Note: These are UPDATING Methods...!

import React, { Component } from 'react';

class LifeCycleTwo extends Component {
    // Note: Method 1:
    constructor(props) {
        super(props);

        this.state = {
            name: "Muhammad"
        }
        console.log("constructor is running!");
    }

    // Note: Method 2:
    // static getDerivedStateFromProps(props, state) {
    //     // console.log(props, state);
    //     console.log("getDerivedStateFromProps is running!");
    //     return {
    //         name: props.updateName
    //     }
    // }

    // Note: Method 3:
    // shouldComponentUpdate() {
    //     return true;
    // }

    // Function to change name...!
    // changeName = () => {
    //     this.setState({
    //         name: "Shaheen"
    //     });
    // }

    // componentDidMount() {
    //     console.log("componentDidMount is running!");
    //     setTimeout(() => {
    //         this.setState({
    //             name: "Shahzada Ahmed"
    //         });
    //     }, 1000);
    // }

    // Note: Method 4:
    // getSnapshotBeforeUpdate(previousProps, previousState) {
    //     console.log("getSnapshotBeforeUpdate is running!");
    //     console.log(`Before the update, the name was ${previousState.name}.`);
    // }

    // Note: Method 5:
    // componentDidUpdate() {
    //     console.log("componentDidUpdate is running!");
    //     console.log(`After the update, the name is ${this.state.name}`);
    // }

    render() {
        console.log("render is running!");
        return (
            <React.Fragment>
                <h1> {`Hi, My name is ${this.state.name}.`} </h1>
                <button onClick={this.changeName}> Chnage Name </button>
            </React.Fragment>
        );
    }
}

export default LifeCycleTwo;