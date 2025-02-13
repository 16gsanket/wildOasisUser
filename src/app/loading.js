import React from 'react'
import Spinner from './_components/Spinner'

// a gloabal laoder to show whilethe data is being loaded
function loading() {
  return (
    <section>
        <Spinner />
    </section>
  )
}

export default loading