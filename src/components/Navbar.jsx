import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="brand">ZenFlow</a>
        <nav className={`links ${open ? 'open' : ''}`}>
          <a href="#classes">Classes</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact" className="btn btn-primary">Book a Class</a>
        </nav>
        <button className="hamburger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
