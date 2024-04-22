import React, { useState } from 'react'
import { useChatStore } from '../../store/chat'

interface ITextBoxProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TextBox: React.FC<ITextBoxProps> = (props) => {
  const [message, setMessage] = useState<string>('')
  const { addMessage } = useChatStore((state) => state)

  function handleSend() {
    addMessage(message, {
      user: 'User',
      dateTime: new Date(),
      isCurrentUser: true,
    })
    setMessage('')
  }

  return (
    <div className="flex items-center justify-between w-full gap-x-2">
      <input
        type="text"
        className="w-full p-2 border border-gray-300"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSend()
          }
        }}
      />

      <button
        className="bg-brand-primary-400 text-white p-2 border border-white"
        onClick={handleSend}
        >
        Send
      </button>
    </div>
  )
}

export default TextBox