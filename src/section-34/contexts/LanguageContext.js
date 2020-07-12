import React, { createContext, Component } from "react";

const LanguageContext = createContext();

class LanguageProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "french",
    };
  }

  setLanguage = (evt) => {
    this.setState({ language: evt.target.value });
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, setLanguage: this.setLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

const withLanguage = (Component) => (props) => (
  <LanguageContext.Consumer>
    {(value) => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
);

export { LanguageContext, LanguageProvider, withLanguage };
