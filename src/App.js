import React from "react";
import Header from "./components/Header"
import "./App.css"
import { Routes, Route} from "react-router-dom"
import Feed from "./components/Feed";
import Footer from "./components/Footer"
import Profile from "./components/profile/Profile";
import LoginHome from "./components/auth/LoginHome";


function App() {

  return(
    <>
      <Header/> 
        <Routes>
          <Route path="/" element={<Feed />}/>
          <Route path="login/*" element={<LoginHome/>}/>
          <Route path="profile/*" element={<Profile/>}/>
        </Routes>
      <Footer/> 
    </>
  )
}

export default App;
