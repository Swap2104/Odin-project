import { useState } from 'react'
import './styles/App.css'
import PreviewSection from './components/Preview'
import InputSection from './components/InputSection'


function App() {
  return (
    <div className='app'>
      <InputSection/>
      <PreviewSection/>
    </div>
  )
}

export default App
