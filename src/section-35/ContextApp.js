import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import PageContent from "./PageContent";
import Navbar from "./Navbar";
import Form from "./Form";
import { LanguageProvider } from "./contexts/LanguageContext";

function ContextApp() {
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

export default ContextApp;
