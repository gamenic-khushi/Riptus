import { useState } from 'react'
import DrawerMenu from './DrawerMenu'
import '../styles/Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="logo">Riptus Inc.</div>
        <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </header>

      <DrawerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
