import { create } from 'zustand'
import { ChatMessage, ChatMessageMeta } from '../components/Chat/ChatMessage'

type ChatState = {
  messages: ChatMessage[]
  addMessage: (message: string, meta: ChatMessageMeta) => void

  currentChat: string | null
  themeColor: string
  setThemeColor: (themeColor: string) => void
  history_summary: string | null
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (message, meta) => set((state) => ({ messages: [...state.messages, { message, meta  }] })),

  currentChat: null,
  themeColor: 'bg-brand-primary-400',
  setThemeColor: (themeColor: string) => set(() => ({ themeColor })),
  history_summary: null
}))