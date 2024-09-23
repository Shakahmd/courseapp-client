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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' bg-[#F9F9F8] overflow-hidden h-screen'>
       <Router>
     <NavBar/>
      <Routes>
        <Route path="/e/adminSignIn" element={<AdminSignin/>}/>
        <Route path="/e/adminSignUp" element={<AdminSignup/>}/>
        <Route path="/addCourse" element={<AddCourse/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App
