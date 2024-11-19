import Link from "next/link"
import React, { useState, useEffect } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai/index.js"
import ThemeChanger from "./themeChanger"

export default function Header() {
  const [header, setHeader] = useState(false)
  const [headerColor, setHeaderColor] = useState("transparent")
  const [headerText, setHeaderText] = useState("white")
 
  const handleHeader = () => {
    setHeader(!header)
  }

  const handleMobileHeader = () => {
    setHeader(false)
  }

  useEffect(() => {
    const handleColorChange = () => {
      if (window.scrollY >= 250) {
        setHeaderColor("##b0bced")
        setHeaderText("#1A3A5F")
      } else {
        setHeaderColor("rgba(255, 255, 255, 0.1)")
        setHeaderText("#1A3A5F")
      }
    }
    window.addEventListener("scroll", handleColorChange)
    return () => window.removeEventListener("scroll", handleColorChange)
  }, [])

  return (
    <div
      style={{ background: `${headerColor}`, backdropFilter: "blur(6px)" }}
      className="fixed top-0 left-0 w-full h-20 shadow-xl flex justify-center items-center z-40 ease-in duration-300"
    >
      <div className="max-w-[1024px] flex justify-between items-center px-4">
        <div className="max-w-[1024px] m-5 flex justify-between items-center p-4">
          <Link href="/">
            <h1
              style={{ color: `${headerText}` }}
              className="py-2 text-2xl font-bold hover:text-orange-500"
            >
              JoyBor
            </h1>
          </Link>
        </div>

        {/* Rest of your existing header code remains the same */}

        <ul
          style={{ color: `${headerText}` }}
          className="text-sm font-medium hidden sm:flex"
        >
          <li className="p-4 hover:text-[#4179A3]">
            <Link href="#about-container">About</Link>
          </li>
          <li className="p-4 hover:text-[#4179A3]">
            <Link href="#services">Services</Link>
          </li>
          <li className="p-4 hover:text-[#4179A3]">
            <Link href="#reviews">Reviews</Link>
          </li>
          <li className="p-4 hover:text-[#4179A3]">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        <p
          style={{ color: `${headerText}` }}
          className="hidden sm:flex text-sm font-light ml-10 mr-5 hover:text-[#4179A3] cursor-pointer"
        >
          Aloqa
        </p>
        <div className="mr-10">
          <ThemeChanger />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div onClick={handleHeader} className="block sm:hidden p-4 z-10">
        {header ? (
          <AiOutlineClose size={30} style={{ color: `${headerText}` }} />
        ) : (
          <AiOutlineMenu size={30} style={{ color: `${headerText}` }} />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          header
            ? "sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300"
            : "sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300"
        }
      >
        <ul style={{ color: `${headerText}` }} className="text-sm font-bold">
          <li className="mx-7 py-4 text-4xl hover:text-[#4179A3]">
            <Link href="#about-container" onClick={handleMobileHeader}>
              About
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-[#4179A3]">
            <Link href="#services" onClick={handleMobileHeader}>
              Services
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-[#4179A3]">
            <Link href="#deals" onClick={handleMobileHeader}>
              Deals
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-[#4179A3]">
            <Link href="#reviews" onClick={handleMobileHeader}>
              Reviews
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-[#4179A3]">
            <Link href="#contact" onClick={handleMobileHeader}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}