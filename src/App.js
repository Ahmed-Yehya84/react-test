import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Client from "./pages/Clients";
import Coworkers from "./pages/Coworkers";
import Analytics from "./pages/Analytics";
import { useState } from "react";
import FilterHeader from "./component/FilterHeader";

function App() {
  const [sidebar, setSideBar] = useState(false);
  return (
    <>
      <Router>
        <Navbar sidebar={sidebar} setSideBar={setSideBar} />
        <FilterHeader sidebar={sidebar} />
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/coworkers" element={<Coworkers />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
