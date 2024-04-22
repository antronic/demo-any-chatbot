const LOGO_URL = '/images/logo.png'

export const DEFAULT_LOGO_URL = '/images/any-chatbot-logo.png'
export const CHATBOT_NAME = 'Any Chatbot'

// Load Logo URL, if file not found, return default logo URL
const checkLogoUrl = async (url: string) => {
  try {
    const response = await fetch(url)
    if (response.status === 404) {
      return DEFAULT_LOGO_URL
    }
    return url
  } catch (error) {
    return DEFAULT_LOGO_URL
  }
}

export const getLogoUrl = async () => await checkLogoUrl(LOGO_URL)