import { useState } from 'react'
import { DEFAULT_LOGO_URL, getLogoUrl } from '../config'

export default function Navbar() {
  const [logoUrl, setLogoUrl] = useState(DEFAULT_LOGO_URL)

  // Load Logo URL

  return (
    <nav className="navbar w-full bg-black px-6 py-4 border-b-2 border-b-white">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item flex gap-x-4" href="/">
            <img src={logoUrl} alt="Logo" />
            <span className="text-white font-bold text-xl">Vite</span>
            </a>
        </div>
      </div>
    </nav>
  )
}