import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Navbar from './components/common/header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register'
import Login from './pages/Login'
import PageNotFound from './pages/404'


function App() {

  return (
    <div className="App">
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  );
}

export default App;
