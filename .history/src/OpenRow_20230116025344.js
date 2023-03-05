import React from 'react'

function OpenRow({ title, subject, description, time }) {
  return (
    <div className="flex items-center gap-4 border-b-2 border-b-red-900 p-4">
      <div className="font-bold font-serif">
            <h3>{title}</h3>
        </div>
        <div className="flex-1">
            <h4>{subject}
                <span className="ml-2"  >{description}</span>
            </h4>
        </div>
        <div className="">
            <h4>{time}</h4>  
        </div>  
    </div>
  )
}

export default OpenRow