// Importing necessary dependencies and components
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Templates from "./Pages/Templates/Templates";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { AuthProvider } from "./context/AuthContext";
import ResumeForm from "./Components/ResumeForm/ResumeForm";
import ToastManager from "./Components/ToastManager";

function App() {
  return (
    <AuthProvider>
      <ToastManager /> {/* Handling toast notifications */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/about" element={<About />} /> {/* About Page */}
          <Route path="/templates" element={<Templates />} />{" "}
          {/* Resume Templates Page */}
          <Route path="/login" element={<Login />} /> {/* Login Page */}
          <Route path="/register" element={<Register />} />{" "}
          {/* Register Page */}
          <Route path="/resumeform" element={<ResumeForm />} />{" "}
          {/* Resume Form Page */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
