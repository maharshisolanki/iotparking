import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./adminRegister";
import Login from "./adminLogin";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/admin/parking/home">
              <Home />
            </Route> */}
            <Route exact path="/admin/parking/login">
              <Login />
            </Route>
            <Route exact path="/admin/parking/registration">
              <Registration />
            </Route>
            {/* <Route exact path="/admin/parking/slot">
              <Dashboard />
            </Route>
            <Route exact path="/admin/parking/order">
              <Dashboard />
            </Route>
            <Route exact path="/admin/parking/status">
              <Dashboard />
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(App);
