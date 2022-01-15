import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

type NavLinkProps = {
  pathname: string
  title: string
  isResponsive?: boolean
  setOpenSidebar?: (props) => void
}

const NavLink: React.FC<NavLinkProps> = ({
  pathname,
  title,
  isResponsive,
  setOpenSidebar
}) => {
  const router = useRouter()

  return (
    <Link href={pathname}>
      <a
        onClick={isResponsive ? () => setOpenSidebar(false) : null}
        className={router.pathname === pathname ? 'active' : ''}
        href=""
      >
        {title}
      </a>
    </Link>
  )
}

export default NavLink
