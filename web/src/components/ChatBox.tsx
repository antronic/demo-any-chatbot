import ChatMessageList from './Chat/ChatMessageList'
import TextBox from './ChatTextBox/TextBox'

export default function ChatBox() {
  return (
    <>
      <div className="border-2 border-white w-3/4 mx-auto p-4">
        <h2 className="code">
          [Chatbot Name]
        </h2>

        <div className="chatbox border-2 mt-6 p-4">
          <ChatMessageList/>
        </div>

        <div className="mt-2">
          <TextBox />
        </div>
      </div>
    </>
  )

}