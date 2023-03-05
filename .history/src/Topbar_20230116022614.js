import React from 'react'

function Topbar() {
  return (
    <div className="flex items-center justify-around text-lg hover:scale-0.25">
        <div className='hover:underline'>
            <p>Compose</p>
        </div>
        <div className='hover:underline'>
            <p>Inbox</p>
        </div>
        <div className='hover:underline'>
            <p>Trash</p>
        </div>
        <div className='hover:underline'>
            <p>Outbox</p>
        </div>
    </div>
  )
}

export default Topbar