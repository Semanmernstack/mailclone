import React from 'react'

function OpenRow({ title, subject, description, time }) {
  return (
    <div className="flex gap-4 border-b-2 border-b-red-900">
      <div className="">
            <h3>{title}</h3>
        </div>
        <div className="">
            <h4>{subject}
                <span className=""  >{description}</span>
            </h4>
        </div>
        <div className="">
            <h4>{time}</h4>  
        </div>  
    </div>
  )
}

export default OpenRow