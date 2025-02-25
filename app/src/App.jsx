import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import FizzBuzz from './components/fizzbuzz'
import LoginForm from './Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/" element={<FizzBuzz />} /> 
      </Routes>
    </Router>
  )
}

export default App
