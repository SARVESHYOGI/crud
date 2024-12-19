import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './components/Create'
import Update from './components/Update'
import User from './components/User'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App