import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import MainComponent from './components/MainComponent/MainComponent'
import NewEntry from './components/MainComponent/NewEntry/NewEntry'
import Authors from './components/MainComponent/Authors/Authors'
import './App.css'


function App() {

  return (
    <>
        <section className='container pt-3'>

        <Routes>
          <Route path='/' element={<MainComponent />} />
          <Route path='/new/?' element={<NewEntry />} />
          <Route path='/api/authors/' element={<Authors />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    
      </section>
  
    </>
  )
}

export default App
