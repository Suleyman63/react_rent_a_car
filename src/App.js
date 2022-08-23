import About from "./about/About";
import "./App.css";
import Service from "./servis/Service";
import Career from "./career/Career";
import Contact from "./contact/Contact";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Register from "./register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
