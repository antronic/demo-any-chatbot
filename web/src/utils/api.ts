const HOST = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000'

// Api hooks
export const sendMessage = async (message: string, history: { chat: string, role: string }[] | string) => {
  const host = localStorage.getItem('API_HOST') || HOST
  const response = await fetch(host + '/api/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, history }),
  })

  const data = await response.json()

  return data
}