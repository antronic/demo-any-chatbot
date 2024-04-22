import { useState } from 'react'
import { DEFAULT_LOGO_URL, getLogoUrl } from '../config'

export default function Navbar() {
  const [logoUrl, setLogoUrl] = useState(DEFAULT_LOGO_URL)

  // Load Logo URL

  return (
    <nav className="navbar relative w-full bg-white text-black px-6 py-4 border-0">
      <div className="flex justify-between">
        <div className="navbar-brand">
          <a className="navbar-item flex gap-x-4" href="/">
            <img src={logoUrl} alt="Logo" className="h-12" />
            <div className="flex flex-col">
              <span className="font-bold text-xl">Any Chatbot</span>
              <span className="text-xs">
                by <a className="hover:underline" href="https://github.com/antronic" target="_blank" rel="noreferrer">Jirachai</a>
              </span>
            </div>
            </a>
        </div>

        <div className="flex items-center">
          <a className="hover:underline" href="https://github.com/antronic/demo-any-chatbot" target="_blank" rel="noreferrer">
            Source Code
          </a>
        </div>
      </div>

      <div className="w-full h-1 bg-gradient-to-r left-0 bottom-0 from-pink-600 via-yellow-600 to-purple-700 absolute"></div>
    </nav>
  )
}