import "./App.css";
import { PoketmonProvider } from "./context/PoketmonContext";
import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <PoketmonProvider>
        <Router />
      </PoketmonProvider>
    </>
  );
}

export default App;
