import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About.jsx";
import NotFound from "./components/pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import User from "./components/pages/User";

function App() {
  return (
    <GithubProvider>
      <Router>
        <Navbar />
        <Routes>  
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/user/:login" element={<User />} />
          <Route path="/*" element={<NotFound />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </GithubProvider>
  );
}

export default App;
