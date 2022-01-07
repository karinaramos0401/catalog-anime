import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";


import './App.scss';

function App() {
  
  return (

    
    <div className='App'>

      <Routes>
        <Route exact path="login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div> 
  );
}

export default App;
