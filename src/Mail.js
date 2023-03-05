import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectOpenMail } from './features/mailSlice'

function Mail() {
  const selectedMail = useSelector(selectOpenMail)
  const navigate = useNavigate()
  
  return (
    
    <div className="flex flex-col">
        <div onClick={() => navigate("/")}>
            <p  className='p-2 cursor-pointer  hover:text-rose-900 underline'>Back to Home</p>
        </div>
        <div className="flex flex-col text-lg p-4 ">
           <div>
                <p>{selectedMail?.subject}</p>
                <p>{selectedMail?.title}</p>
                <p>{selectedMail?.time}</p>

            </div> 
            <div>
                <p>{selectedMail?.description}</p>
            </div>
            
        </div>
    </div>
  )
}

export default Mail