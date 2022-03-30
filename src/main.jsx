import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import About from './routes/about'
import Blog from './routes/blog'
import Halloween from './routes/halloween'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='about' element={<About />} />
      <Route path='blog' element={<Blog />} />
      <Route path='halloween' element={<Halloween />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
