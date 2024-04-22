import React, { useState } from 'react'
import { useChatStore } from '../../store/chat'
import { sendMessage } from '../../utils/api'
import { useApiStore } from '../../store/api'

interface ITextBoxProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TextBox: React.FC<ITextBoxProps> = (props) => {
  const [message, setMessage] = useState<string>('')
  const [isTyping, setIsTyping] = useState<boolean>(false)

  const { addMessage, messages } = useChatStore((state) => state)
  const { setSendMessageResponse } = useApiStore((state) => state)

  async function handleSend() {
    addMessage(message, {
      user: 'User',
      dateTime: new Date(),
      isCurrentUser: true,
    })
    setMessage('')

    setIsTyping(true)
    const data = await sendMessage(message, messages.map((m) => ({ chat: m.message, role: m.meta.user })) || [])
    setSendMessageResponse(data)
    addMessage(data.messages[0], {
      user: 'Bot',
      dateTime: new Date(),
      isCurrentUser: false,
    })

    setIsTyping(false)
  }

  return (
    <div>
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
          disabled={!message || isTyping}
        >
          Send
        </button>
      </div>

      <div className="text-sm my-2">
        <p>{isTyping ? 'Bot is typing...' : ''}</p>
      </div>
    </div>
  )
}

export default TextBox