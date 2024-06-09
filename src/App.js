import "./App.css";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import  {app} from "../src/Components/Firebase";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

const auth = getAuth(app);


function App() {

  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login/>} />

      </Routes>
     
     
     
    </div>
  );
}

export default App;