import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './Header/Header'
import HomeMain from './Main/HomeMain'
import Signup from './Signup/Signup'
import { AuthContext, AuthProvider } from './context/AuthContext'
import Login from './Login/Login'
import { useContext } from 'react'


function ProtectRoute({ children }) {
  const { token } = useContext(AuthContext)
  if (!token) return <Navigate to='/login' />
  return children

}


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ProtectRoute><HomeMain /></ProtectRoute>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
