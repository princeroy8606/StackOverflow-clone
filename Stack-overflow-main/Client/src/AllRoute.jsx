import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Authentication/Auth";
import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";
import AskQusetion from "./pages/AskQuestion/AskQusetion";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/AskQuestion" element={<AskQusetion />} />
      <Route path="/Questions/:id" element={<DisplayQuestion />} />
      <Route path="/Tags" element={<Tags />} />
      <Route path="/Users" element={<Users/>} />
      {/* <Route path="/Users" element={<Users/>} /> */}
    </Routes>
  );
}

export default AllRoute;
