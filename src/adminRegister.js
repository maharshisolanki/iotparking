import React, { Component } from "react";
import "./Register.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addData } from "./action";

class Register extends Component {
  state = {
    name: "",
    parking_name: "",
    location: "",
    area: "",
    slots: "",
    phone_no: "",
    email: "",
  };

  namehandler = (e) => {
    this.setState({ name: e.target.value });
  };
  parkinghandler = (e) => {
    this.setState({ parking_name: e.target.value });
  };
  locationhandler = (e) => {
    this.setState({ location: e.target.value });
  };
  areahandler = (e) => {
    this.setState({ area: e.target.value });
  };
  slotshandler = (e) => {
    this.setState({ slots: e.target.value });
  };
  phonehandler = (e) => {
    this.setState({ phone_no: e.target.value });
  };
  emailhandler = (e) => {
    this.setState({ email: e.target.value });
  };
  passwordhandler = (e) => {
    this.setState({ password: e.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.history.push("/admin/parking/login");
    this.props.addData(this.state);
  };

  render() {
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

        <label>Parking Name:</label>
        <input
          type="text"
          name="parking_name"
          required
          onChange={this.parkinghandler}
        />

        <label>Location:</label>
        <input
          type="text"
          name="location"
          required
          onChange={this.locationhandler}
        />

        <label>Area Name:</label>
        <input
          type="text"
          name="area_name"
          required
          onChange={this.areahandler}
        />

        <label>Available Slots:</label>
        <input
          type="text"
          name="slots"
          required
          onChange={this.slotshandler}
          pattern="^[0-9]{1,3}$"
        />

        <label>Phone No:</label>
        <input
          type="text"
          name="phone_no"
          required
          onChange={this.phonehandler}
          pattern="^[0-9]{10}$"
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          required
          onChange={this.emailhandler}
        />

        <button type="submit">Sign Up</button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state,
});

const mapStateToDispatch = (dispatch) => ({
  addData: (payload) => dispatch(addData(payload)),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(withRouter(Register));
