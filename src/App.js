import React from "react";
import Header from "./components/Header"
import "./App.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Feed from "./components/Feed";

function App() {
 
  return(
    <main>
      <BrowserRouter>
        <Header/> 
        <Feed/>
      </BrowserRouter>
    </main>
  )
}

export default App;
