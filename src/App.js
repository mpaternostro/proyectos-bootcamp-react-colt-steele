import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./section-23/Nav";
import Dogs from "./section-23/Dogs";
import DogInfo from "./section-23/DogInfo";
import whiskey from "./section-23/img/whiskey.jpg";
import hazel from "./section-23/img/hazel.jpg";
import tubby from "./section-23/img/tubby.jpg";
import "./section-23/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food.",
        ],
      },
    ],
  };
  render() {
    const dogNames = this.props.dogs.map((dog) => dog.name);
    const getDog = (dogQuery) =>
      this.props.dogs.find(
        (dog) => dog.name.toLowerCase() === dogQuery.toLowerCase()
      );

    return (
      <div className="App">
        <Nav names={dogNames} />
        <Switch>
          <Route
            exact
            path="/dogs"
            render={() => <Dogs dogsData={this.props.dogs} />}
          />
          <Route
            exact
            path="/dogs/:name"
            render={(routeProps) => {
              const query = routeProps.match.params.name;
              const dog = getDog(query);
              return dog ? (
                <DogInfo {...routeProps} data={dog} />
              ) : (
                <h1>{query} not found</h1>
              );
            }}
          />
          <Route
            exact
            path="/:operation/:numberOne/:numberTwo"
            render={(routeProps) => {
              const operations = {
                add(num1, num2) {
                  return num1 + num2;
                },
                substract(num1, num2) {
                  return num1 - num2;
                },
                multiply(num1, num2) {
                  return num1 * num2;
                },
                divide(num1, num2) {
                  return num1 / num2;
                },
              };
              const operation = routeProps.match.params.operation;
              const num1 = Number(routeProps.match.params.numberOne);
              const num2 = Number(routeProps.match.params.numberTwo);
              if (!operations[operation]) return <Redirect to="/dogs/" />;
              // return routeProps.history.push("/dogs/");
              const result = operations[operation](num1, num2);
              return <h1>The result is: {result}</h1>;
            }}
          />
          <Redirect to="/dogs" />
        </Switch>
      </div>
    );
  }
}
