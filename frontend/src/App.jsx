import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Components/Home'
import Progress from './Components/Progress'
import About from './Components/About'
import Navbar from './Components/Navbar'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Mock from './Components/Mock'
import DSA from './Components/DSA'
import DSASheet from './Components/DSASheet'
import AdminSignUp from './Components/Admin/Signup'
import Adminlogin from './Components/Admin/Login'
import Admin from './Components/Admin/Admin'
import AddProblem from './Components/Admin/AddProblems'
import MockStreaming from './Components/MockStreaming'
import CodeEditor from './Components/CodeEditor'
import Subjects from './Components/Subjects'
import Dashboard from './Components/Admin/Dashboard'



function App() {
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  
  return (
    <div className={  darkMode ? "dark bg-black h-screen   " : "bg-white h-screen"} >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}  />
        <Routes>
          <Route path="/Admin/add-problem" element={<AddProblem darkMode={darkMode}/>} />
          <Route path="/Admin" element={<Admin darkMode={darkMode}/>} />
          <Route path="/Admin/dashboard" element={<Dashboard darkMode={darkMode}/>} />
          <Route path="/Admin/signup" element={<AdminSignUp darkMode={darkMode}/>} />
          <Route path="/Admin/login" element={<Adminlogin darkMode={darkMode}/>} />
          <Route path="/Admin/add-subject" element={<Subjects darkMode={darkMode}/>} />
          <Route path="/" element={<Home darkMode={darkMode}/>} />
          {/* <Route path="/progress" element={<Progress darkMode={darkMode} />} /> */}
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/signup" element={<SignUp darkMode={darkMode} />} />
          <Route path="/login" element={<Login darkMode={darkMode} />} />
          <Route path="/profile" element={<Profile darkMode={darkMode} />} />
          <Route path="/mock" element={<Mock darkMode={darkMode} />} />
          <Route path="/dsa" element={<DSA darkMode={darkMode} />} />
          <Route path="/dsa/sheet" element={<DSASheet darkMode={darkMode} />} />
          <Route path="/mock/mock-streaming" element={<MockStreaming darkMode={darkMode} />} />
          <Route path="/code-editor" element={<CodeEditor darkMode={darkMode} />} />

        </Routes>
    </div>  
    
  )
}

export default App
