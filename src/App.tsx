import { Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
