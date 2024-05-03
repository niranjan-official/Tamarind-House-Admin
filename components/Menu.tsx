import Image from 'next/image'
import React from 'react'
import Sidebar from './Sidebar'
import NavButton from './NavButton'


const Menu = () => {
  return (
    <div className="w-full md:w-max h-full flex sm:flex-col max-sm:items-center max-sm:justify-between p-4 md:relative bg-primary z-50">
        <div className="flex items-center gap-2">
          <Image
            src={"/prc-logo.svg"}
            className="bg-red-100 p-1 rounded-md bg-opacity-70"
            alt="prc-logo"
            width={40}
            height={40}
          />
          <h1 className="text-red-100 text-2xl">Admin Panel</h1>
        </div>
        <div className='max-sm:hidden'>
        <hr className="my-4" />
        <Sidebar/>
        </div>
        <NavButton/>
      </div>
  )
}

export default Menu
