import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Wrapper from "./Pages/Wrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper />
      </BrowserRouter>
    </>
  );
}

export default App;
