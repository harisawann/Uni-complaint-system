import './App.css'
import Login from './Login'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import StdNav from './StdNav'
import FacultyNav from './FacultyNav'
import AdminNav from './AdminNav'

function App() {

  return (
    <>      
      <Routes>        
        <Route path='/' element={<><Login  /> </>} />        
        <Route path='/student/navbar' element={<><Navbar role="student" /> </>} />
        <Route path='/faculty/navbar' element={<><Navbar role="faculty" /> </>} />
        <Route path='/admin/navbar' element={<><Navbar role="admin" /> </>} />
      </Routes>
    </>
  )
}

export default App
