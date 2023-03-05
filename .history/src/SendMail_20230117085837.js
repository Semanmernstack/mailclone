import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';

function SendMail() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
        console.log(formData)
        addDoc(collection(db, "email"), {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: serverTimestamp()
        })
        dispatch(closeSendMessage())
        
        
    } 
  return (
    <div className=" flex absolute bottom-0 p-2 ml-2 mb-2 flex-col max-width-[350px] h-[300px] w-[300px] bg-slate-900 text-white">
            <div className="flex items-center justify-evenly cursor-pointer ">
                <h3>New Message</h3>
                <button className="animate-pulse" onClick={() => dispatch(closeSendMessage())}   >x</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-2 " >
                <input type="text"
                    name="email"
                    placeholder='to'
                    className='h-7 text-lg border-b-2 flex-1 my-3 border-none outline-none hover:bg-white '

                    {...register("to", { required: true })}

                />
                {errors.to && <p className=''>To is Requred</p>}

                <input type="text"
                    name="subject"
                    placeholder="subject"
                    className='h-7 text-lg border-b-2 flex-1 my-3 border-none outline-none hover:bg-white '

                    {...register("subject", { required: true })}

                />
                {errors.subject && <p className=''>Subject is Requred</p>}


                <textarea name="message" id="" cols="20" rows="10"
                    placeholder='message'
                    className='w-[250px] h-[80px] text-lg  '

                    {...register("message", { required: true })}
                />



                {errors.message && <p className=''>message is Requred</p>}


                <div className="">
                    <button>Send</button>
                </div>
            </form>

        </div>
  )
}

export default SendMail