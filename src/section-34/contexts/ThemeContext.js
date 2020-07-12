import React, { createContext, Component } from "react";

const ThemeContext = createContext();

class ThemeProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDarkMode: false,
    };

    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode = () => {
    this.setState((st) => {
      return { isDarkMode: !st.isDarkMode };
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleDarkMode }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeContext, ThemeProvider };
