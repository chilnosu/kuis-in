import { useRef, useState } from 'react'
import { House, ListChecks, Menu, X } from 'lucide-react'
import Brand from './Brand'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef(null)

  function closeOnEscape(event) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false)
      menuButton.current.focus()
    }
  }

  return (
    <header className="site-header" onKeyDown={closeOnEscape}>
      <div className="shell header-inner flex items-center justify-between">
        <Brand />
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          ref={menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Navigasi utama">
          <a className="nav-item nav-current" href="#beranda" aria-current="page" onClick={() => setMenuOpen(false)}>
            <House size={17} aria-hidden="true" /> Beranda
          </a>
          <a className="nav-item" href="/latihan-soal">
            <ListChecks size={17} aria-hidden="true" /> Latihan Soal
          </a>
        </nav>
      </div>
    </header>
  )
}
