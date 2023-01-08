import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoute from "./AllRoute";
import { useEffect } from "react";
import { fetchAllQuestions } from "./actions/question";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestions());
  }, [dispatch]);
  return (
    <>
      <Router>
        <Navbar />
        <AllRoute />
      </Router>
    </>
  );
}

export default App;
