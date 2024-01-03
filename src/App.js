import React from 'react';
// import navbar
import Navbar from './components/navbar.jsx';
import Home from './components/Home.js';
import Login from './components/Login.js';
// import Leftbar from './Components/Leftbar.js';
import Signup from './components/Signup.js'
import  { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import Services from './Components/Services.js';
function App(){
  return(
    <>
    <Router>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
         <Route path="/Signup" element={<Signup/>}></Route> 
         <Route path="/navbar" element={<navbar/>}></Route> 
        {/* <Route path="/Dashboard" element={<Dashboard/>}></Route>  */}
        {/* <Route path="/Register" element={<Register/>}></Route>   */}
        {/* <Route path="/Settings" element={<Settings/>}></Route>   */}
        {/* <Route path="/About" element={<About/>}></Route>   */}
        {/* <Route path="/Services" element={<Services/>}></Route>   */}
        {/* <Route path="/Photos" element={<Photos/>}></Route> */}
      </Routes>
    </Router>
    </>
    )
}
export default App