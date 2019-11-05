import React from "react";
import SignIn from "./SignUp";
import SignUp from "./SignIn";

export default class className extends React.Component {
  state = {
    signIn: true
  };

  Switch = () => {
    console.log("hi");
    this.setState({
      signIn: !this.state.signIn
    });
  };

  render = () => (
    <div>
      {this.state.signIn ? (
        <SignIn Switch={this.Switch} />
      ) : (
        <SignUp Switch={this.Switch} />
      )}
    </div>
  );
}
