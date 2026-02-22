import About from './About';
import Help from './Help';
import Complaintdata2 from './Complaintdata2';
import './App.css'
import Login from './Login'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Submitcomplaint from './Submitcomplaint';
import Complaintdata from './Complaintdata';
import Dashboard from './Dashboard';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<><Login /> </>} />
        <Route path='/student' element={<><Navbar role="student" /> </>} />
        <Route path='/faculty' element={<><Navbar role="faculty" /> </>} />
        <Route path='/admin' element={<><Navbar role="admin" /> </>} />
        <Route path="/student/dashboard" element={<Navbar role="student"> <Complaintdata /></Navbar>} />
        <Route path="/student/submitcomplaint" element={<Navbar role="student"> <Submitcomplaint /></Navbar>} />
        <Route path="/student/mycomplaint" element={<Navbar role="student"><Complaintdata2 /></Navbar>} />
        <Route path="/student/about" element={<Navbar role="student"> <About /></Navbar>} />
        <Route path="/student/help" element={<Navbar role="student"> <Help /></Navbar>} />
        <Route path="/student/logout" element={<Navbar role="student"></Navbar>} />
      </Routes>
    </>
  )
}

export default App
