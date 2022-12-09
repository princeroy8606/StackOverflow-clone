import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoute from "./AllRoute";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AllRoute/>
      </Router>
    </>
  );
}

export default App;
