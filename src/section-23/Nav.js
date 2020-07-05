import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() {
    this.setState({ dropdown: !this.state.dropdown });
  }

  render() {
    const links = this.props.names.map((name, i) => (
      <li key={i} className={`nav-item${this.state.dropdown ? " shown" : ""}`}>
        <NavLink
          exact
          className="nav-link"
          activeClassName="active"
          to={`/dogs/${name}`}
        >
          {name}
        </NavLink>
      </li>
    ));

    return (
      <nav className="Nav">
        <ul className="nav">
          <li className="Nav-title">
            <Link to="/dogs/">Dog Shelter</Link>
            <i
              className="Nav-title--menu fa fa-bars"
              onClick={this.handleMenu}
            />
          </li>
          <li className={`nav-item${this.state.dropdown ? " shown" : ""}`}>
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/dogs/"
            >
              Home
            </NavLink>
          </li>
          {links}
        </ul>
      </nav>
    );
  }
}

export default Nav;
