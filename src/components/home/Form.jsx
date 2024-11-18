import React, { useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { ChevronDown, X, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Form () {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('Toshkent shahar')

  const regions = [
    'Toshkent shahri',
    'Toshkent viloyati',
    'Buxoro',
    'Samarqand',
    'Navoi',
    'Jizzax',
    'Sirdaryo',
    'Xorazm',
    "Qoraqalpog'iston",
    'Andijon',
    "Farg'ona",
    'Namangan'
  ]

  const handleRegionSelect = region => {
    setSelectedRegion(region)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='bg-white h-20 w-[800px] rounded-xl flex items-center px-4'>
      <div className='mr-4'>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select region' />
          </SelectTrigger>
          <SelectContent>
            {regions.map(region => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className='mr-4'>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select option' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>New buildings</SelectItem>
            <SelectItem value='dark'>Rent</SelectItem>
            <SelectItem value='system'>Buy</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='mr-4'>
        <Input placeholder="Price" />
      </div>
      <div className='flex-1'>
        <Button className='w-full'>Search</Button>
      </div>
    </div>
  )
}
