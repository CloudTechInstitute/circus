import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
