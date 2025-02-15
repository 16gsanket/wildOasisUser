'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'

import React from 'react'

function Filter() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router  = useRouter()
   

    const handleClick = (filter) => {

        const params= new URLSearchParams(searchParams)
        params.set('filter',filter)

        router.replace(`${pathname}?${params.toString()}`)
        
        
    }

  return (
    <div className='border border-primary-800 flex'>
        <button className='px-5 py-2 hover:bg-primary-700' onClick={()=>handleClick('all')}>
            All Cabins
        </button>
        <button className='px-5 py-2 hover:bg-primary-700' onClick = {()=>handleClick('small')}>
            1&mdash;3 guests
        </button>
        <button className='px-5 py-2 hover:bg-primary-700' onClick = {()=>handleClick('medium')}>
            4&mdash;7 guests
        </button>
        <button className='px-5 py-2 hover:bg-primary-700' onClick = {()=>handleClick('large')}>
            8&mdash;12 guests
        </button>
       
    </div>
  )
}

export default Filter