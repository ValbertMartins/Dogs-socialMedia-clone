import React from "react";
import Header from "./components/Header"
import "./App.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Feed from "./components/Feed";
import Footer from "./components/Footer"
import Login from "./components/auth/Login"
import { AuthProvider } from "./context/Auth";
import Register from "./components/auth/Register";
import Profile from "./components/profile/Profile";
import PostDetails from "./components/feed/PostDetails";



function App() {
 
  return(
    <main>
    <AuthProvider>
      <BrowserRouter>
          <Header/> 
          <Routes>
            <Route path="/" element={<Feed/>}/>
            <Route path="login/" element={<Login/>}/>
            <Route path="login/register" element={<Register/>}/>
            <Route path="profile/*" element={<Profile/>}/>
            <Route path="photo/*" element={<PostDetails/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </AuthProvider>
      
    </main>
  )
}

export default App;
