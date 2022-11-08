import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { increaseButton, decreaseButton } from "./actions";

class App extends Component {
  render() {
    return (
      <div>
        <h3>Current count: {this.props.count}</h3>
        <br />
        <button onClick={() => increaseButton()}>Increase</button>
      </div>
    );
  }
}

// Function that maps state to component props
const mapStateToProps = store => (
  {
    count: store.counter.score
  }
)

const mapDispatchToProps = dispatch => bindActionCreators({ increaseButton }, dispatch);

// Connect is a react function that bind our Component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(App);