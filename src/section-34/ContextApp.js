import React, { Component } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import PageContent from "./PageContent";
import Navbar from "./Navbar";
import Form from "./Form";
import { LanguageProvider } from "./contexts/LanguageContext";

export class ContextApp extends Component {
  render() {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    );
  }
}

export default ContextApp;
