import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/Homepage";
import Phone from "./components/Phone";
import Navbar from "./components/Navbar";
import Tablet from "./components/Tablet";
import Earbud from "./components/Earbud";
import Laptop from "./components/Laptop";
import Monitor from "./components/Monitor";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/tablet" element={<Tablet />} />
        <Route path="/earbud" element={<Earbud />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/keyboard" element={<Keyboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
