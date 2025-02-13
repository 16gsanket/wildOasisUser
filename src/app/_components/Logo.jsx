import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/app/public/logo.png"

function Logo() {
  return (
    <div className='z-10'>
        <Link href='/' className='flex items-center gap-4 z-10'>
        <Image src={logo} quality={100} alt='logo' height={60} width={60}/>
        {/* <Image src='' alt='logo' height={60} width={60}/> */}
            <span className='text-xl font-semibold text-primary-100'>
              The Wild Oasis
            </span>
        </Link>
    </div>
  )
}

export default Logo