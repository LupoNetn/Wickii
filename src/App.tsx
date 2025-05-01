import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthorizedLayout from './components/AuthorizedLayout'
import Home from './pages/Home'
import Create from './pages/Create'
import Profile from './pages/Profile'
import SignUp from './components/SignUp'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route element={<AuthorizedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
