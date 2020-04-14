import React, { Component } from "react";
import "./Register.css";
import { connect } from "react-redux";

class Login extends Component {
  componentDidMount() {
    this.props.data.map((t) => this.setState(t));
  }
  namehandler = (e) => {
    this.setState({ name: e.target.value });
  };
  passwordhandler = (e) => {
    this.setState({ password: e.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    // if (this.state.name === this)
    // {
    //     if(this.state.password === )
    // }
    // else {
    //     alert("Please Enter correct username")
    // }
    //   this.props.history.push("/admin/parking/login");
    // this.props.addData(this.state);
  };
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h1>Sign Up</h1>

        <label>Name:</label>
        <input type="text" name="name" required onChange={this.namehandler} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          required
          onChange={this.passwordhandler}
        />
        <button type="submit">login</button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Login);
