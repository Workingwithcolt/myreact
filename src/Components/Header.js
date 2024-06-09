import React from 'react'
import Logo from './Logo'
// import Navlinks from './Navlinks'

const Header = () => {
  return (
    <header className='bg-dark-background sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8'>
      <Logo/>
      <h1>header</h1>
       {/* <Navlinks/> */}
    </header>
  )
}

export default Header
