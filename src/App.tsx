import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
