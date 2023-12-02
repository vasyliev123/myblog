"use client";

import Link from "next/link"
import { useState } from "react"


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        const navbarSticky = document.getElementById('navbar-sticky')
        if (navbarSticky != null) {
            navbarSticky.classList.toggle('hidden')
            //  navbarSticky.classList.toggle('backdrop-blur-lg')
            // navbarSticky.classList.toggle('bg-opacity-30')
            // navbarSticky.classList.toggle('transition-all')
            // navbarSticky.classList.toggle('bg-cool-black-dark')
        }
        setIsOpen(!isOpen)
     }
    return (
       

<nav className="bg-cool-black-dark fixed w-full z-20 top-0 start-0   backdrop-blur-lg bg-opacity-30 transition-all h-20  ">
  <div className="max-w-screen-xl flex flex-wrap items-stretch justify-between mx-auto p-2 h-full">
  <Link href="/" className="flex items-center space-x-3 ml-5">
  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DV</span>
  </Link>

  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse h-full items-center">
    
    <button  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-900" onClick={handleClick}>
        <span className="sr-only">Open main menu</span>
        <svg id="navbar-sticky-button" className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            {/* {isOpen ? (
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 13h15M1 7h15M1 1h15"/>
                    ) : (
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l15 15M1 15l15-14"/>
                )                        
            } */}
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 13h15M1 7h15M1 1h15"/>

        </svg>
    </button>
  
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mr-5 rounded-2xl " id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-center  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
        <li>
            <Link href="/">
            <p className="block px-4 py-2 transition duration-200 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-700 md:p-2">Home</p>
            </Link>
        </li>
    
        <li>
            <Link href="#projects">
            <p className="block px-4 py-2 transition duration-200 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-700 md:p-2">Projects</p>
            </Link>
        </li>
    
        <li>
            <Link href="#about">
            <p className="block px-4 py-2 transition duration-200 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-700 md:p-2">About</p>
            </Link>
        </li>
    
        <li>
            <Link href="#contact" scroll={true}>
            <p className="block px-4 py-2 transition duration-200 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-700 md:p-2">Contact</p>
            </Link>
        </li>
    
    </ul>
  </div>
  </div>
</nav>

    )
}

export default NavBar