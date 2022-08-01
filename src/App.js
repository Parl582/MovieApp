import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleMovie from "./pages/SingleMovie";
import style from "./style.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<SingleMovie />} />
      </Routes>
    </>
  );
}

export default App;
