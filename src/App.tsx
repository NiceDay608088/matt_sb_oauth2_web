import "./App.css";
import FormTestPage from "./pages/formtest/formtest_page";
import HomePage from "./pages/home/home_page";
import LoginPage from "./pages/login/login_page";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/formtest" element={<FormTestPage />} />
      </Routes>
    </>
  );
}

export default App;
