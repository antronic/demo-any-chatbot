import { CHATBOT_NAME } from '../config'
import ChatMessageList from './Chat/ChatMessageList'
import TextBox from './ChatTextBox/TextBox'

export default function ChatBox() {
  return (
    <div className="w-3/4 mx-auto">
      <div className="bg-gradient-to-r from-pink-600 via-yellow-600 to-purple-700 p-1">
        <div className="bg-black p-4">
          <h2 className="code">
            {String(CHATBOT_NAME).toUpperCase()}
          </h2>

          <div className="chatbox border-2 mt-6 p-4">
            <ChatMessageList/>
          </div>

          <div className="mt-2">
            <TextBox />
          </div>
        </div>
      </div>
    </div>
  )

}