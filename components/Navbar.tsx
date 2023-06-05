"use client"
import Link from 'next/link';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { FaShoppingCart, FaSearch } from 'react-icons/fa'

interface NavbarLink {
  href: string;
  icon: any;
}

const navbarLinks: NavbarLink[] = [
  {
    href: '/cart',
    icon: <FaShoppingCart />,
  }
]

function Navbar() {
  return (
    <div className='bg-background border-b border-border shadow-sm p-3 flex items-center'>
      <div className='flex-1'>
        <Link href="/">
          <h1 className='text-2xl font-bold select-none'>GreenZone</h1>
        </Link>
      </div>
      <div className='flex-grow flex'>
        <Input placeholder='Wyszukaj produkt...'
          className='rounded-none' />
        <Button className='rounded-none' ><FaSearch /></Button>
      </div>
      <div className='flex-1 flex justify-end'>
        {navbarLinks.map((link, index) => (
          <Link className='flex text-xl p-1  items-center justify-center flex-col'  href={link.href} key={index}>
            {link.icon}
          </Link>
        ))
        }
      </div>
    </div>
  )
}

export default Navbar