import { Routes, Route, Link } from "react-router-dom";

import "./styles/style.css";
import Homepage from "./pages/homePage";
import Createpage from "./pages/createPage";

function App() {
  return (
    <>
      <nav>
        {/* <Link to="/">Home</Link> */}
        <Link to="/">Teacher Attendance</Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/" element={<Createpage />} />
      </Routes>
    </>
  );
}

export default App;
