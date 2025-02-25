import React from 'react'
import { auth } from '../_lib/auth'
export const metadata = {
  title:"Account"
}


async function page() {
  const session = await auth();
  console.log(session);
  
  return (
    <section>
        <h2 className='text-2xl text-white'>This is Account Page</h2>
    </section>
  )
}

export default page