import React from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Search from './components/Search'
import Project from './components/Project'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/:username" element={<Projects />} />
          <Route path="/:username/:project_id" element={<Project />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
