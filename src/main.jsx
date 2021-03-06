import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Footer from './components/footer'
import About from './routes/about'
import Blog from './routes/blog'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='about' element={<About />} />
      <Route path='blog' element={<Blog />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
)
