import { Routes, Route, Link } from "react-router-dom";

import "./styles/style.css";
import Home from "./pages/home";
import Create from "./pages/create";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">create</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
