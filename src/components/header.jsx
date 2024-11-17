'use client'

import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { ChevronDown, X, Check } from 'lucide-react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import ThemeChanger from "./themeChanger"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [header, setHeader] = useState(false)
  const [headerColor, setHeaderColor] = useState("transparent")
  const [headerText, setHeaderText] = useState("white")
  const [selectedRegion, setSelectedRegion] = useState("Toshkent sh")
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('')

  const regions = [
    "Toshkent shahri",
    "Toshkent viloyati",
    "Buxoro",
    "Samarqand",
    "Navoi",
    "Jizzax",
    "Sirdaryo",
    "Xorazm",
    "Qoraqalpog'iston",
    "Andijon",
    "Farg'ona",
    "Namangan"
  ]

  const handleHeader = () => {
    setHeader(!header)
  }

  const handleMobileHeader = () => {
    setHeader(false)
  }

  const handleRegionSelect = (region) => {
    setSelectedRegion(region)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
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

  console.log(search)

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

          {/* Region Selector */}
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium ml-4"
                style={{ color: `${headerText}` }}
                onClick={toggleDropdown}
              >
                {selectedRegion}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 max-h-[400px] overflow-y-auto bg-white z-50"
              style={{
                position: 'relative',
                zIndex: 9999,
                backgroundColor: '#000000',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="flex justify-end p-2 border-b border-gray-800">
                <Input
                  type="text" 
                  placeholder="Country"
                  className="mr-1.5"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              {regions.filter((item) => item.toLocaleLowerCase().includes(search)).map((region) => (
                <DropdownMenuItem
                  key={region}
                  onKeyDown={() => {}}
                  className="cursor-pointer flex justify-between items-center hover:bg-gray-800 text-white"
                  onClick={() => handleRegionSelect(region)}
                >
                  {region}
                  {selectedRegion === region && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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