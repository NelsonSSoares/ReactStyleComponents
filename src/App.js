import React from "react";
import { GlobalStyle } from "./Components/globalstyle";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

function App() {
  return (
    <>
    <GlobalStyle />
      <Cabecalho />
      <Container />
    </>
  );
}

export default App;
