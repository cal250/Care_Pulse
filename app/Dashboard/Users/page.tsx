import React from 'react'
import Link from 'next/link'


function DashbordUsers() {
  return (
    <>
    <h1>Users Dashboard</h1>
    <ul className='list-disc list-inside'>
      <li>
        <Link href="/Dashboard/Users/1">User 1</Link>
        </li>
        <li>
        <Link href="/Dashboard/Users/2">User 2</Link>
        </li>
        <li>
        <Link href="/Dashboard/Users/3">User 3</Link>
        </li>

        

      </ul>
      </>
  )
}

export default DashbordUsers