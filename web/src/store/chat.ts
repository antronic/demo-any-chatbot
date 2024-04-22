import { create } from 'zustand'
import { ChatMessage, ChatMessageMeta } from '../components/Chat/ChatMessage'

type ChatState = {
  messages: ChatMessage[]
  addMessage: (message: string, meta: ChatMessageMeta) => void
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [
    {
      message: 'Hello there!',
      meta: {
        user: 'Bot',
        dateTime: new Date(),
        isCurrentUser: false,
      }
    },
    {
      message: 'Hi!',
      meta: {
        user: 'User',
        dateTime: new Date(),
        isCurrentUser: true,
      }
    },
  ],
  addMessage: (message, meta) => set((state) => ({ messages: [...state.messages, { message, meta  }] })),

  currentChat: null,
}))