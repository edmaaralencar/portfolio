import React from 'react'
import Link from 'next/link'

import { Container } from './styles'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <div className="logo">
        <div></div>
        <span>Edmar Alencar</span>
      </div>

      <nav>
        <Link href="/">
          <a className={router.pathname === '/' ? 'active' : ''} href="">
            Início
          </a>
        </Link>
        <Link href="/skills">
          <a className={router.pathname === '/skills' ? 'active' : ''} href="">
            Habilidades
          </a>
        </Link>
        <Link href="/experiences">
          <a
            className={router.pathname === '/experiences' ? 'active' : ''}
            href=""
          >
            Experiência
          </a>
        </Link>
        <Link href="/projects">
          <a
            className={router.pathname === '/projects' ? 'active' : ''}
            href=""
          >
            Portfolio
          </a>
        </Link>
        <Link href="/contact">
          <a className="btn-contact" href="">
            Contato
          </a>
        </Link>
      </nav>
    </Container>
  )
}

export default Header
