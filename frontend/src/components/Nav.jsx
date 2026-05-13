import { NavLink } from 'react-router-dom'

export default function Nav() {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'nav_select'
        : 'nav_unselect'
    }`

  return (
    <nav className="sec_background">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-white">Stackanomics</div>
        <div className="flex gap-2">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
