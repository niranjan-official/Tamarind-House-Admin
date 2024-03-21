import Image from 'next/image'
import React from 'react'
import NavBar from './NavBar'

const Menu = () => {
  return (
    <div className="w-5/6 h-full md:w-1/5 p-4 md:relative bg-primary z-50 hidden md:block">
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
        <hr className="my-4" />
        <NavBar/>
      </div>
  )
}

export default Menu
