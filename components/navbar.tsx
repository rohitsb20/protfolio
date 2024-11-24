import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex items-center justify-between'>
       <div className=''>
        <Link href='/'>
        logo
        </Link>
       </div>
    </div>
  )
}
