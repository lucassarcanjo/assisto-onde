import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Footer } from "./components";
import Routes from "./routes";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
