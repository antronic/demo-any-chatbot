const HOST = 'http://127.0.0.1:5000'

// Api hooks
export const sendMessage = async (message: string, history: { chat: string, role: string }[]) => {
  const response = await fetch(HOST + '/api/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, history }),
  })

  const data = await response.json()

  return data
}