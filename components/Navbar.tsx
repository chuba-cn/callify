import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className=' flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-5 lg:px-10'>
      <Link href="/" className="flex items-center gap-1">
        <Image 
          src="/icons/logo.svg"
          width={35}
          height={35}
          alt="callify_icon"
          className='max-sm:size-10'
        />
        <p className="font-extrabold text-white text-[26px] max-sm:hidden">Callify</p>
      </Link>

      <div className="flex-between gap-5">
        {/* Clerk - User Management */}

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar