import React from 'react'
import Link from 'next/link'

export const NavBar = async () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>

      <Link href={'/'}>
        <span>Home</span>
      </Link>
        
        <div className='flex flex-1'></div>

        <Link className="mr-2" href="/contact">Contact</Link>
        <Link className="mr-2" href="/about">About</Link>
        <Link className="mr-2" href="/pricing">Princing</Link>
        <Link className="mr-2" href="/hola">Hola</Link>
    </nav>
  )
}
