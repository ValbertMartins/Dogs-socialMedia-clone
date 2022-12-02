import React from "react";
import Header from "./components/Header"
import "./App.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Feed from "./components/Feed";
import Footer from "./components/Footer"
import Login from "./components/form/Login"
import { GlobalStateStore } from "./context/GlobalState";

function App() {
 
  return(
    <main>
    <GlobalStateStore>
      <BrowserRouter>
          <Header/> 
          <Routes>
            <Route path="/" element={<Feed/>}/>
            <Route path="login" element={<Login/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </GlobalStateStore>
      
    </main>
  )
}

export default App;
