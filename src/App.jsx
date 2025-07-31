import { Routes, Route, Link } from "react-router-dom";

import "./styles/style.css";
import Homepage from "./pages/homePage";
import Createpage from "./pages/createPage";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">create</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
      </Routes>
    </>
  );
}

export default App;
