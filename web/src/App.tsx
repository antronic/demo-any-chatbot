import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ChatBox from './components/ChatBox'

function App() {
  return (
    <>
      <Navbar />

      {/* Chatbox */}
      <div className="p-4 w-full">
        <ChatBox />
      </div>
    </>
  )
}

export default App
