import {Routes, Route} from "react-router-dom";

//import the components and pages
import Navbar from "./components/Navbar";
//import the pages
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";


export default function App() {
 
  return (
    <>
      <Navbar />

      <Routes>
        <Route path ="/" element={<Home />}></Route>
        <Route path ="/tasks" element={<Tasks />}></Route>
        <Route path ="/tasks/:id" element={<TaskDetails />}></Route>
        <Route path ="/about" element={<About />}></Route>
        <Route path ="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}   

