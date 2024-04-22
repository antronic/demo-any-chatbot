import { create } from 'zustand'

type ApiState = {
  sendMessageResponse?: any
  setSendMessageResponse: (response: any) => void
}

export const useApiStore = create<ApiState>((set) => ({
  sendMessageResponse: undefined,
  setSendMessageResponse: (response) => set(() => ({ sendMessageResponse: response })),
}))