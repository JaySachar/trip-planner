// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
// import Planner from "./pages/Planner";
// import About from "./pages/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
        <NavBar />
      <Routes>
        { <Route path="/" element={<Home />} />
        // <Route path="/planner" element={<Planner />} />
        // <Route path="/about" element={<About />} /> */
        }
      </Routes>
    </Router>
  );
}

export default App;
