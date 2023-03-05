import React from 'react'

function Header() {
  return (
    <div className="flex items-center justify-around p-2     h-24 bg-pink-200 border-b-pink-800 shadow-2xl">
        <div>
            <h1 className="text-lg md:text-2xl font-semibold">pemsMail</h1>

        </div>
        <div className="flex items-center justify-evenly">
            
            <img className="h-12 w-12 rounded-full shadow-lg" src="https://cdn.pixabay.com/photo/2022/12/01/12/26/countryside-7629017__340.jpg" alt="pic" />
            <div className="mr-2">
                <p>Hello,</p>
                <p>Oluwaseyi Abejide</p>
            </div>
        </div>
    </div>
  )
}

export default Header