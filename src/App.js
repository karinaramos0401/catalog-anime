import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";


import './App.scss';

function App() {
  return (
    
    <div className='App'>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route exact path="login" element={<Login/>} />
      </Routes>
    </div> 
  );
}

export default App;
