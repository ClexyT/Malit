import { useState, memo } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import DarkButton from './DarkButton'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen(v => !v)
  const handleNavigate = () => setOpen(false)

  return (
    <nav
      className="sticky top-0 z-10 w-full bg-slate-200/80 dark:bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-200/60 dark:supports-[backdrop-filter]:bg-slate-900/60"
      role="navigation"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#home" className="shrink-0">
          <img
            src={logo}
            alt="Malit"
            width="112"
            height="28"
            className="h-7 w-auto dark:invert transition-transform"
          />
        </a>

        {/* Links (desktop) */}
        <ul className="hidden sm:flex items-center gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className="mt-1 font-poppins text-[16px] text-black hover:text-orange-600 dark:text-slate-100 dark:hover:text-orange-400"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark mode button (desktop) */}
        <div className="hidden sm:block">
          <DarkButton />
        </div>

        {/* Toggle (mobile) */}
        <div className="sm:hidden">
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={handleToggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <img
              src={open ? close : menu}
              alt={open ? 'Cerrar menú' : 'Abrir menú'}
              className="h-6 w-6 dark:invert"
              width="24"
              height="24"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-nav"
          className="sm:hidden"
        >
          <div className="px-4 pb-4">
            <div className="rounded-xl border border-slate-200/60 dark:border-slate-700/60 bg-white/90 dark:bg-slate-800/90 shadow-md">
              <ul className="flex flex-col items-stretch gap-2 p-4">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <a
                      href={`#${nav.id}`}
                      onClick={handleNavigate}
                      className="block rounded-md px-3 py-2 text-[16px] text-slate-900 hover:bg-orange-50 hover:text-orange-700 dark:text-slate-100 dark:hover:bg-slate-700/60 dark:hover:text-orange-300"
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
                <li className="pt-2 border-t border-slate-200/70 dark:border-slate-700/70">
                  <div className="flex justify-center py-1">
                    <DarkButton />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default memo(Navbar)
