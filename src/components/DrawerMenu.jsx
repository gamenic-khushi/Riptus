import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../constants'
import '../styles/DrawerMenu.css'

export default function DrawerMenu({ open, onClose }) {
  return (
    <>
      <div
        className={`dm-backdrop ${open ? 'dm-backdrop--visible' : ''}`}
        onClick={onClose}
      />

      <div className={`dm-panel ${open ? 'dm-panel--open' : ''}`}>
        <button className="dm-close" onClick={onClose} aria-label="Close menu">✕</button>

        <div className="dm-top">
          <Link to="/privacy" onClick={onClose} className="dm-top__btn">
            Privacy Policy<br />Terms and Condition
          </Link>
        </div>

        <nav className="dm-nav">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} onClick={onClose}>{label}</a>
          ))}
        </nav>

        <a className="dm-url" href="https://riptus.net" target="_blank" rel="noreferrer">
          https://riptus.net
        </a>
      </div>
    </>
  )
}
