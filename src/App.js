import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <main className="bg-amber-100 w-9/12 mx-auto h-auto">
      <Routes>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </main>
  );
}

export default App;
