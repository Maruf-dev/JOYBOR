import React, { useState } from 'react'
import Image from 'next/image'
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
import house from '../../assets/images/dom.png'
import key from '../../assets/images/kalit.png'
import sofa from '../../assets/images/divan.png'
import house2 from '../../assets/images/house.png'
import keychain from '../../assets/images/brilok.png'

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
    <div className=''>
      <div className='bg-white h-20 w-[800px] rounded-xl flex items-center px-4 mb-5'>
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
          <Input placeholder='Price' />
        </div>
        <div className='flex-1'>
          <Button className='w-full'>Search</Button>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='rounded-[16px] w-[124px] h-[124px] bg-white relative overflow-hidden'>
          <div className='overflow-hidden rounded-[16px] w-[145px] h-[150px] absolute top-[-26px] right-0'>
            <div
              className="bg-contain bg-no-repeat bg-center absolute w-[170px] h-[170px] transition-all duration-300 hover:scale-105 hover:bg-center"
              style={{
                backgroundImage: `url(${house.src})`,
              }}
            />
          </div>
        </div>
        <div className='rounded-[16px] w-[124px] h-[124px] bg-white relative'>
          <div className='overflow-hidden rounded-[16px] w-[150px] h-[150px] absolute top-[-26px] right-[3px]'>
            <div
              className="bg-contain bg-no-repeat bg-center absolute w-[170px] h-[170px] transition-all duration-300 hover:scale-105 hover:bg-center"
              style={{
                backgroundImage: `url(${key.src})`,
              }}
            />
          </div>
        </div>
        <div className='rounded-[16px] w-[124px] h-[124px] bg-white relative'>
          <div className='overflow-hidden rounded-[16px] w-[150px] h-[150px] absolute top-[-26px] right-[0]'>
            <div
              className="bg-contain bg-no-repeat bg-center absolute w-[170px] h-[170px] transition-all duration-300 hover:scale-105 hover:bg-center"
              style={{
                backgroundImage: `url(${sofa.src})`,
              }}
            />
          </div>
        </div>
        <div className='rounded-[16px] w-[124px] h-[124px] bg-white relative overflow-hidden'>
          <div className='overflow-hidden rounded-[16px] w-[150px] h-[150px] absolute top-[-23px] right-[0]'>
            <div
              className="bg-contain bg-no-repeat bg-center absolute w-[170px] h-[170px] transition-all duration-300 hover:scale-105 hover:bg-center"
              style={{
                backgroundImage: `url(${house2.src})`,
              }}
            />
          </div>
        </div>
        <div className='rounded-[16px] w-[124px] h-[124px] bg-white relative overflow-hidden'>
          <div className='overflow-hidden rounded-[16px] w-[150px] h-[150px] absolute top-[-24px] right-[-5px]'>
            <div
              className="bg-contain bg-no-repeat bg-center absolute w-[170px] h-[170px] transition-all duration-300 hover:scale-105 hover:bg-center"
              style={{
                backgroundImage: `url(${keychain.src})`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
