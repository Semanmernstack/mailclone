import React from 'react'

function Header() {
  return (
    <div className="flex items-center justify-around      h-24 bg-pink-200 border-b-pink-800 shadow-2xl">
        <div>
            <h1 className="text-lg">pemsMail</h1>

        </div>
        <div>
            
            <img className="h-12 w-12 rounded-full shadow-lg" src="https://cdn.pixabay.com/photo/2022/12/01/12/26/countryside-7629017__340.jpg" alt="pic" />
            <div>
                <p>Hello,</p>
                <p>Oluwaseyi Abejide</p>
            </div>
        </div>
    </div>
  )
}

export default Header