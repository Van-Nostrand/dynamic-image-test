import React, { useState } from 'react'
import './navbar.scss'

interface Navbar {
  setPage: (v: number) => void;
}

export default function Navbar ({ setPage }: Navbar) {
  const [navIsOpen, setNavIsOpen] = useState(false)
  // const [page, setPage] = useState(0)

  const navDrawerClass = [
    'nav__drawer',
    navIsOpen ? 'nav__drawer--open' : ''
  ].join(' ')

  return (
    <nav className="nav">
      <div className="nav__inner">

        <div className="nav__logo">logo</div>

        <button
          className="nav__hamburger"
          onClick={() => setNavIsOpen(!navIsOpen)}
        >
          BURGER
        </button>

      </div>
      <div className={navDrawerClass}>
        <div
          className="nav__link"
          onClick={() => setPage(0)}
        >
          Link 1
        </div>
        <div
          className="nav__link"
          onClick={() => setPage(1)}
        >
          Link 2
        </div>
      </div>
    </nav>
  )
}
