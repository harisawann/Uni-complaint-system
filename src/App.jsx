import About from './About';
import Help from './Help';
import Dashboard from './Dashboard';
import Complaint from './Complaint';
import Mycomplaint from './Mycomplaint';
import './App.css'
import Login from './Login'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<><Login /> </>} />
        <Route path='/student' element={<><Navbar role="student" /> </>} />
        <Route path='/faculty' element={<><Navbar role="faculty" /> </>} />
        <Route path='/admin' element={<><Navbar role="admin" /> </>} />        
        <Route path="/student/dashboard" element={<Navbar role="student"> <Dashboard /></Navbar>} />          
        <Route path="/student/complaint" element={<Navbar role="student"> <Complaint /></Navbar>} />          
        <Route path="/student/mycomplaint" element={<Navbar role="student"> <Mycomplaint /></Navbar>} />        
        <Route path="/student/about" element={<Navbar role="student"> <About /></Navbar>} />        
        <Route path="/student/help" element={<Navbar role="student"> <Help /></Navbar>} />        
        <Route path="/student/logout" element={<Navbar role="student"></Navbar>} /> 
      </Routes>        
    </>
  )
}

export default App
