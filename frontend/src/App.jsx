import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/AuthPage";
import "./App.css";
import ProblemPage from "./pages/ProblemPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/problems/:name" element={<ProblemPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
