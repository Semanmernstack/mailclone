import React from 'react'

function Topbar() {
  return (
    <div className="flex ">
        <div>
            <p>Compose</p>
        </div>
        <div>
            <p>Inbox</p>
        </div>
        <div>
            <p>Trash</p>
        </div>
        <div>
            <p>Outbox</p>
        </div>
    </div>
  )
}

export default Topbar