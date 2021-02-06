import React, { Component } from "react";
// import LifeCycle from "./My Componenets/LearningLifeCycle";
// import LifeCycleTwo from "./My Componenets/LearningLifeCycle2";
import LifeCycleThree from "./My Componenets/LearningLifeCycle3";

// App Component...!
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <LifeCycle favCol="Blue" /> */}
        {/* <LifeCycleTwo updateName="Ahmed" /> */}
        <LifeCycleThree />
      </React.Fragment>
    );
  }
}

export default App;