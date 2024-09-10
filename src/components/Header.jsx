import React from 'react'
import { UserButton, useUser,  } from '@clerk/clerk-react';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'



function Header() {
  const {user, isSignedIn } = useUser();
  return (
    <div className='flex justify-between item-center shadow-sm p-5'>
      <img src="/dev_logo.jpg" alt="" width={40} height={50} />

      <ul className='hidden md:flex gap-16'>
        <li className='font-medium hover:scale-150 transition-all cursor-pointer'><Link to={'/'}>Home</Link></li>
        <li className='font-medium hover:scale-150 transition-all cursor-pointer'>Search</li>
        <li className='font-medium hover:scale-150 transition-all cursor-pointer'>New</li>
        <li className='font-medium hover:scale-150 transition-all cursor-pointer'>Preowned</li>

      </ul>

      {isSignedIn ?
        <div className='flex item-center gap-5'>
          <UserButton/>
          <Link to={'/profile'}>
          <Button className='font-medium hover:scale-150 transition-all cursor-pointer'   >Submit Listing</Button>
          </Link>
        </div>
        :
        <Button>Submit Listing</Button>
      }

    </div>
  )
}

export default Header;