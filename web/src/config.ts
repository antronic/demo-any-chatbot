const LOGO_URL = '/images/logo.png'

export const DEFAULT_LOGO_URL = '/vite.svg'

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

export const getLogoUrl = await checkLogoUrl(LOGO_URL)