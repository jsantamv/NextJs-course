import React from 'react'
import Link from 'next/link'
import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
  {
    text: 'Contact',
    path: '/contact'
  },
  {
    text: 'About',
    path: '/about'
  },
  {
    text: 'Pricing',
    path: '/pricing'
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
            <ActiveLink key={navItem.text} {...navItem}/>
          )
        })
      }
    </nav>
  )
}
