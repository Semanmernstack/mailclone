import React from 'react'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { selectMail } from './features/mailSlice'

function OpenRow({ id, title, subject, description, time }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = () => {
    dispatch(selectMail({
      id,
      title,
      description,
      time,
      subject,
    }))
    navigate("/mail")
  }
  return (
    <div onClick={handleSubmit} className="flex  shadow-lg overflow-x-hidden items-center gap-4 border-b-2 border-b-red-900 p-4">
      <div className="font-bold font-serif text-lg">
            <h3>{title}</h3>
        </div>
        <div className="flex-1">
            <h4 className="font-bold">{subject}
                <span className="ml-2 text-sm truncate overflow-hidden text-overflow:ellipsis  text-rose-900"  >{description}</span>
            </h4>
            
        </div>
        <div className="text-xs lg:text-lg">
            <h4>{time}</h4>  
        </div>  
    </div>
  )
}

export default OpenRow