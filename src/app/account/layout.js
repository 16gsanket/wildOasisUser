import React from 'react'
import SideNavigation from '../_components/SideNavigation'

function layout({children}) {
  return (
    <div className='grid grid-cols-[12rem_1fr] gap-16 '>
        <SideNavigation />
        <div className='py-1'>{children}</div>
    </div>
  )
}

export default layout