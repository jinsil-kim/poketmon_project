import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";
import { PokemonStore } from "/src/store/PokemonStore.jsx";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={PokemonStore}>
        <Router />
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
