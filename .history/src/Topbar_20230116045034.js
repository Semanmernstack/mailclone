import React from 'react'
import { useDispatch } from 'react-redux'

function Topbar() {
    const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-around text-lg p-3">
        <div  className='hover:underline hover:text-red-900 hover:text-2xl'>
             <button onClick={() => dispatch(openSendMessage())}  >Compose</button>
        </div>
        <div className='hover:underline hover:text-red-900 hover:text-2xl'>
            <p>Inbox</p>
        </div>
        <div className='hover:underline hover:text-red-900 hover:text-2xl'>
            <p>Trash</p>
        </div>
        <div className='hover:underline hover:text-red-900 hover:text-2xl'>
            <p>Outbox</p>
        </div>
    </div>
  )
}

export default Topbar