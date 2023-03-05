import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Header() {
  const user = useSelector(selectUser)
  return (
    <div className="flex items-center justify-around p-2     h-24 bg-pink-200 border-b-pink-800 shadow-2xl">
        <div>
            <h1 className="text-lg md:text-2xl font-semibold">pemsMail</h1>

        </div>
        <div className="flex items-center justify-evenly">
            
            <img className="h-12 w-12 rounded-full shadow-lg" src={user.photoUrl} alt="pic" />
            <div className="ml-2">
                <p>Hello,</p>
                <p>{user.displayName}</p>
            </div>
        </div>
    </div>
  )
}

export default Header