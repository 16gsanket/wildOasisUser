import React from 'react'
import SpinnerMini from '../_components/SpinnerMini'


// a gloabal laoder to show whilethe data is being loaded
function loading() {
  return (
    <section className='grid place-items-center justify-center gap-12'>
        <SpinnerMini />
        <h2 className='text-2xl text-primary-400'>Loading Cabins Data</h2>
    </section>
  )
}

export default loading