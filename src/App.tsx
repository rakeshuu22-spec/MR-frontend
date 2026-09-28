import React from "react";
import Signup from './Components/Signup'
import Login from "./Components/Login";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
</Routes>
</BrowserRouter>
   
    </div>
  );
};

export default App;