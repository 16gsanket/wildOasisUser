'use client'
import React, { useState } from 'react'

function Counter({user}) {

    const[counter , setCounter] = useState(0) 
  return (
    <div>
        <p className='text-white text-2xl'>There are {user.length} users in the array</p>
        <button onClick={() => setCounter((counter)=>counter + 1)}> {counter}</button>
    </div>
  )
}

export default Counter