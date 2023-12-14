import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hello from './Hello.jsx'
import Navbar from './Navbar.jsx'
import Todolist from './components/todo.jsx'
// import Comp from './newcomp.jsx'
import ListAnimal from './List.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Todolist />
    {/* <ListAnimal/>  */}
    {/* <Comp /> */}
    {/* <Hello /> */}
  </React.StrictMode>,
)
