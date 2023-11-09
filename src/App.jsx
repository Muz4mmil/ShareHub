import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Room from './components/Room'

function App() {

  return (
    <div className="app h-screen max-sm:h-[90vh] bg-slate-100 grid place-items-center">
      <Home />
      {/* <Room /> */}
    </div>
  )
}

export default App
