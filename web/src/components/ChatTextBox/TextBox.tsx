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
  const { themeColor, setThemeColor } = useChatStore((state) => state)

  const { addMessage, messages, history_summary } = useChatStore((state) => state)
  const { setSendMessageResponse } = useApiStore((state) => state)

  function sendChatHistory() {
    if (history_summary === null) {
      return messages.map((m) => ({ chat: m.message, role: m.meta.user })) || []
    }

    return history_summary
  }

  async function handleSend() {
    addMessage(message, {
      user: 'User',
      dateTime: new Date(),
      isCurrentUser: true,
    })
    setMessage('')

    setIsTyping(true)
    const data = await sendMessage(message, sendChatHistory())
    setSendMessageResponse(data)
    addMessage(data.messages[0], {
      user: 'Bot',
      dateTime: new Date(),
      isCurrentUser: false,
    })

    setIsTyping(false)
  }

  // List 7 rainbow colors button to set the button color
  function handleColorChange(color: string) {
    setThemeColor(color)
  }

  // Render 7 rainbow colors button to set the button color with name of the color
  function listButtons() {
    const colors = [
      'bg-red-400',
      'bg-orange-400',
      'bg-yellow-400',
      'bg-green-400',
      'bg-blue-400',
      'bg-indigo-400',
      'bg-purple-400',
    ]

    return colors.map((color) => (
      <button
        key={color}
        className={`${color} text-white p-2 border border-white`}
        onClick={() => handleColorChange(color)}
      >
        {color.split('-')[1]}
      </button>
    ))

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
          className={`${themeColor} text-black p-2 border border-white`}
          onClick={handleSend}
          disabled={!message || isTyping}
        >
          Send
        </button>
      </div>

      <div className="text-sm my-2">
        <p>{isTyping ? 'Bot is typing...' : ''}</p>
      </div>

      {/* Customize your colors */}
      <div className="flex gap-x-2">
        {listButtons()}
      </div>
    </div>
  )
}

export default TextBox