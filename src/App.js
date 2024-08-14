import "./App.css";
import Footer from './Components/common/Footer'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Contact from "./Components/pages/Contact";
import Home from "./Components/pages/Home";
import Menu from "./Components/pages/Menu";
import Signup from "./Components/pages/Signup";
import AddRoom from './Components/room/AddRoom'
import ExistingRooms from './Components/room/ExistingRooms'
import About from './Components/pages/About'
import { de } from 'date-fns/locale/de';
import Login from "./Components/pages/login.jsx";


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={de}>
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addRoom" element={<AddRoom />} />
          <Route path="/room" element={<ExistingRooms />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
    
     
      </Router>
    </div>
    </LocalizationProvider>
  );
}

export default App;
