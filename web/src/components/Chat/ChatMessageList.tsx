import { useChatStore } from '../../store/chat'
import ChatMessage from './ChatMessage'

export default function ChatMessageList() {
  const messages = useChatStore((state) => state.messages)

  return (
    <div className="">
      {
        messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))
      }
    </div>
  )
}