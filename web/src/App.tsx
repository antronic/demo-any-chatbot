import './App.css'

import Navbar from './components/Navbar'
import ChatBox from './components/ChatBox'
import { useApiStore } from './store/api'

function App() {
  const sendMessageResponse = useApiStore(state => state.sendMessageResponse)

  return (
    <>
      <Navbar />

      {/* Chatbox */}
      <div className="p-4 w-full">
        <ChatBox />
      </div>

      <div className="mt-2">
        <code>
          {JSON.stringify(sendMessageResponse, null, 2)}
        </code>
      </div>
    </>
  )
}

export default App
