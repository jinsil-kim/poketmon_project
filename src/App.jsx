import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer />
    </>
  );
}

export default App;
