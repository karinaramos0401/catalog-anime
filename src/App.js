import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";


function App() {
  return (
    
    <div className='App'>
      <h1>Project</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </div> 
  );
}

export default App;
