// Importing necessary dependencies and components
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Templates from "./Pages/Templates/Templates";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { AuthContext } from "./context/AuthContext";
import ResumeForm from "./Components/ResumeForm/ResumeForm";
import ToastManager from "./Components/ToastManager";
import { useContext } from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ResumePreview from "./Components/ResumePreivew/ResumePreview";

function App() {
  const { loading } = useContext(AuthContext);

  // Show loading indicator while user data is being fetched
  if (loading) {
    return (
      // <div className="flex h-screen items-center justify-center text-white">
      //   Loading...
      // </div>
      /* From Uiverse.io by Cybercom682 */
      <div class="flex h-screen flex-col items-center justify-center pb-10">
        <div class="mx-auto h-20 w-20 animate-spin rounded-full border-4 border-dashed border-[#D84040]"></div>
        <section className="text-center">
          <h2 class="mt-4 text-3xl text-zinc-900 dark:text-white">
            Loading...
          </h2>
          <p class="text-2xl text-zinc-600 dark:text-zinc-400">
            ResuFusion is about to begin!!
          </p>
        </section>
      </div>
    );
  }

  return (
    <>
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
          <Route path="/resumeform/:id" element={<ResumeForm />} />{" "}
          {/* Resume Form Page */}
          <Route path="/dashboard" element={<Dashboard />} />{" "}
          {/* Dashboard Page */}
          <Route
            path="/resumePreview/:resumeId"
            element={<ResumePreview />}
          />{" "}
          {/* Resume Preview Page */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
