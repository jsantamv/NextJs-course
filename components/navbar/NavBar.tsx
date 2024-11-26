import React from 'react'
import Link from 'next/link'
import { HomeIcon } from '@primer/octicons-react'

const navItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Contact',
    href: '/contact'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Pricing',
    href: '/pricing'
  }
]



export const NavBar = async () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>

      <Link href={'/'} className='flex items-center'>
        <HomeIcon className='mr-2' />
        <span>Home</span>
      </Link>

      <div className='flex flex-1'></div>

      {
        navItems.map(navItem => {
          return (
            <Link key={navItem.label} className="mr-2" href={navItem.href}>{navItem.label}</Link>
          )
        })
      }
    </nav>
  )
}
