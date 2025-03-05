// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Templates from "./Pages/Templates/Templates";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import LoginForm from "./Pages/Login/LoginForm";
import ResumeForm from "./Components/ResumeForm/ResumeForm";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resumeform" element={<ResumeForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
