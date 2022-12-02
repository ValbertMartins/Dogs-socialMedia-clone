import React from "react";
import Header from "./components/Header"
import "./App.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Feed from "./components/Feed";
import Footer from "./components/Footer"
import Login from "./components/auth/Login"
import { GlobalStateStore } from "./context/GlobalState";
import Register from "./components/auth/Register";

function App() {
 
  return(
    <main>
    <GlobalStateStore>
      <BrowserRouter>
          <Header/> 
          <Routes>
            <Route path="/" element={<Feed/>}/>
            <Route path="login/" element={<Login/>}/>
            <Route path="login/register" element={<Register/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </GlobalStateStore>
      
    </main>
  )
}

export default App;
