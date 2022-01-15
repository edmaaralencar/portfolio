import React, { useState } from 'react'
import Link from 'next/link'

import { Container, Navbar, ResponsiveNavbar, ResponsiveSpan } from './styles'
import { useRouter } from 'next/router'

import NavLink from '../NavLink'

import MenuIcon from '../../assets/menu.svg'
import CloseIcon from '../../assets/close.svg'

const Header: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false)

  const router = useRouter()

  const handleOpenSidebar = () => setOpenSidebar(true)
  const handleCloseSidebar = () => setOpenSidebar(false)

  return (
    <Container>
      <div className="logo">
        <div></div>
        <span>Edmar Alencar</span>
      </div>

      <Navbar>
        <NavLink pathname="/" title="Início" />
        <NavLink pathname="/skills" title="Habilidades" />
        <NavLink pathname="/experiences" title="Experiência" />
        <NavLink pathname="/projects" title="Portfólio" />

        <Link href="/contact">
          <a className="btn-contact" href="">
            Contato
          </a>
        </Link>
      </Navbar>

      {openSidebar ? (
        <button onClick={handleCloseSidebar}>
          <CloseIcon />
        </button>
      ) : (
        <button onClick={handleOpenSidebar}>
          <MenuIcon />
        </button>
      )}

      <ResponsiveNavbar className={openSidebar ? 'active' : ''}>
        <ResponsiveSpan value={0} />
        <ResponsiveSpan value={1} />
        <ResponsiveSpan value={2} />
        <ResponsiveSpan value={3} />
        <ul>
          <NavLink
            setOpenSidebar={setOpenSidebar}
            isResponsive={true}
            pathname="/"
            title="Início"
          />
          <NavLink
            setOpenSidebar={setOpenSidebar}
            isResponsive={true}
            pathname="/skills"
            title="Habilidades"
          />
          <NavLink
            setOpenSidebar={setOpenSidebar}
            isResponsive={true}
            pathname="/experiences"
            title="Experiência"
          />
          <NavLink
            setOpenSidebar={setOpenSidebar}
            isResponsive={true}
            pathname="/projects"
            title="Portfólio"
          />
          <Link href="/contact">
            <a
              onClick={() => setOpenSidebar(false)}
              className="btn-contact"
              href=""
            >
              Contato
            </a>
          </Link>
        </ul>
      </ResponsiveNavbar>
    </Container>
  )
}

export default Header
