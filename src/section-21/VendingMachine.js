import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Refreshers from "./Refreshers";
import Chocolate from "./Chocolate";
import Candy from "./Candy";
import "./VendingMachine.css";

export class VendingMachine extends Component {
  static defaultProps = {
    refreshers: ["Coca", "Coca Light", "Sprite", "Fanta"],
    chocolates: ["Bananita Dolca", "Barra Chocolate Milka", "Kit-Kat"],
  };
  render() {
    return (
      <div className="VendingMachine">
        <nav className="VendingMachine-nav">
          <NavLink exact to="/" activeClassName="active-page">
            Home
          </NavLink>
          <NavLink exact to="/refreshers" activeClassName="active-page">
            Refreshers
          </NavLink>
          <NavLink exact to="/chocolates" activeClassName="active-page">
            Chocolates
          </NavLink>
          <NavLink exact to="/candies" activeClassName="active-page">
            Candies
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/refreshers"
            render={() => <Refreshers refreshers={this.props.refreshers} />}
          />
          <Route
            exact
            path="/chocolates"
            render={() => <Chocolate chocolates={this.props.chocolates} />}
          />
          <Route exact path="/candies" component={Candy} />
        </Switch>
      </div>
    );
  }
}

export default VendingMachine;
