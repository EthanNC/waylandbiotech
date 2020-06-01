import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
      <div class="flex items-center text-white mr-6 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-5.853-9.44a4 4 0 1 0 2.646 2.646 2 2 0 1 1-2.646-2.647z" fill="rgba(255,255,255,1)" /></svg>
        <span class="font-semibold text-xl tracking-tight">Wayland Biotherapeutics</span>
      </div>
      <div class="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} class="flex items-center px-3 py-2 border rounded text-red-500 border-red-500 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          {!isOpen && <path  d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />}
          {isOpen && <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>}
          </svg>
        </button>
      </div>
      <ul class="hidden lg:flex overflow-x-hidden mr-10 font-semibold">
        <li class="mr-6 p-1">
          <Link to='/' activeClassName="text-red-500" class="text-white hover:text-red-500 active:text-red-500">Home</Link>
        </li>
        <li class="mr-6 p-1">
          <Link to='/about/' activeClassName="text-red-500" class="text-white hover:text-red-500 active:text-red-500">About Us</Link>
        </li>
        <li class="mr-6 p-1">
          <Link to='/covid/' activeClassName="text-red-500" class="text-white hover:text-red-500" >CoVID-19</Link>
        </li>
        <li class="mr-6 p-1">
          <Link to='/platform/' activeClassName="text-red-500"class="text-white hover:text-red-500" >Our Science</Link>
        </li>
        <li class="mr-6 p-1">
          <Link to='/contact/' activeClassName="text-red-500" class="text-white hover:text-red-500" >Contact</Link>
        </li>
      </ul>
      
      <ul class={isOpen ? 'md:flex overflow-x-hidden mr-10 font-semibold' : 'hidden'}>
      <li class="mr-6 p-1">
          <Link to='/' activeClassName="text-red-500" class="text-white hover:text-red-500 active:text-red-500">Home</Link>
        </li>
        <li class="mr-6 p-1">
          <Link to='/about/' activeClassName="text-red-500" class="text-white hover:text-red-500 active:text-red-500">About Us</Link>
        </li>
        <li class="mr-6 p-1">
          <Link to='/covid/' activeClassName="text-red-500" class="text-white hover:text-red-500" >CoVID-19</Link>
        </li>
        <li class="mr-6 p-1">
          <Link to='/platform/' activeClassName="text-red-500"class="text-white hover:text-red-500" >Our Science</Link>
        </li>
        <li class="mr-6 p-1">
          <Link to='/contact/' activeClassName="text-red-500" class="text-white hover:text-red-500" >Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
