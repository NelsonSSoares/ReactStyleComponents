import React, {useState} from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { ThemeProvider } from 'styled-components';
import { temaClaro, temaEscuro } from './Components/UI/temas'
import { BtnTema } from "./Components/UI";
import SwitcherThema from "./Components/SwitcherThema";



function App() {

const [tema, setTema] = useState(true);
const toggleTema = () =>{
  setTema((tema) => !tema)
}
  return (
    
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherThema tema={tema} /> 
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
