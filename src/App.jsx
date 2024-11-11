import "./App.css";
import { PoketmonProvider } from "./context/PoketmonContext";
import Router from "./shared/Router";

function App() {
  return (
    <PoketmonProvider>
      <Router />
    </PoketmonProvider>
  );
}

export default App;
