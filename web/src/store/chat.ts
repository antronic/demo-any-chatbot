import { create } from 'zustand'
import { ChatMessage, ChatMessageMeta } from '../components/Chat/ChatMessage'

type ChatState = {
  messages: ChatMessage[]
  addMessage: (message: string, meta: ChatMessageMeta) => void
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (message, meta) => set((state) => ({ messages: [...state.messages, { message, meta  }] })),

  currentChat: null,
}))