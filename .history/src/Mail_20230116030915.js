import React from 'react'

function Mail() {
  return (
    <div className="flex flex-col">
        <div>
            <p className='p-2 cursor-pointer border'>Back to Home</p>
        </div>
        <div>
           <div>
                <p>subject</p>
                <p>title</p>
                <p>time</p>

            </div> 
            <div>
                <p>description</p>
            </div>
            
        </div>
    </div>
  )
}

export default Mail