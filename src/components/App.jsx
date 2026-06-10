import { Routes, Route } from "react-router-dom";

// Import the components
import Navbar from "./components/Navbar";
// Import the pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>

          <Route 
            path="/"
            element={<Home />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route 
            path="/tasks"
            element={<Tasks />}
          />

          <Route 
            path="/tasks/:id" 
            element={<TaskDetails />}
          />

          <Route 
            path="/about"
            element={<About />}
          />

          <Route 
            path="*"
            element={<NotFound />}
          />

      </Routes>
    </>
  )
}