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

      <div className="mt-2 p-2 w-3/4 border-2 border-white bg-black mx-auto">
        <p className="my-2">Response:</p>
        <code>
          {JSON.stringify(sendMessageResponse, null, 2)}
        </code>
      </div>
    </>
  )
}

export default App
