import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard'
import Auth from './pages/auth/AuthPage'  
import './App.css'

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            {/* <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />}/> */}
            <Route path='/auth' element={<Auth />} />
          </Routes>
        
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
