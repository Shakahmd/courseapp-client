import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Signup from './Signup'
import SignIn from './SignIn'
import NavBar from './NavBar'
import AddCourse from './AddCourse'
import AdminSignup from './AdminSignup'
import AdminSignin from './AdminSignin'
import Courses from './Courses'
import Course from './Course'
import Dashboard from './Dashboard'
import LandingPage from './LandingPage'
import {RecoilRoot}from 'recoil'
import Profile from './Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
        <div className=' bg-[#F9F9F8] overflow-auto h-screen'>
       <Router>
     <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path='/e/dashboard' element={<Dashboard/>}/>
        <Route path='/courses/:courseId'element={<Course/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path="/e/signin" element={<AdminSignin/>}/>
        <Route path="/e/signup" element={<AdminSignup/>}/>
        <Route path="/e/addCourse" element={<AddCourse/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
     </Router>
    </div>

    </RecoilRoot>
  
  )
}

export default App
