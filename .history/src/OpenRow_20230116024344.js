import React from 'react'

function OpenRow({ title, subject, description, time }) {
  return (
    <div>
      <div className="">
                    <h3>{title}</h3>
                </div>
                <div className="">
                    <h4>{subject}
                        <span className=""  >{description}</span>
                    </h4>
                </div>
                <div className="">
                    {time}
                </div>  
    </div>
  )
}

export default OpenRow