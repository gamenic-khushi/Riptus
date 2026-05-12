import { NAV_LINKS } from '../constants'
import '../styles/Sidebar.css'

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
