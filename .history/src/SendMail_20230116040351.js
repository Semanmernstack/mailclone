import React from 'react'
import { useForm } from "react-hook-form";

function SendMail() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (formData) => {} 
  return (
    <div className=" flex absolute bottom-0 flex-col max-width-[350px] h-[400px] w-[350px] bg-slate-300">
            <div className=" ">
                <h3>New Message</h3>
                <button   >x</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-2 " >
                <input type="emails"
                    placeholder='to'
                    className='h-7 border-b-2 flex-1 '

                    {...register("to", { required: true })}

                />
                {errors.to && <p className=''>To is Requred</p>}

                <input type="text"
                    placeholder='subject'
                    className='h-7 border-b-2 flex-1 '

                    {...register("subject", { required: true })}

                />
                {errors.subject && <p className=''>Subject is Requred</p>}


                <input type="text"
                    placeholder='message'
                    className='h-7 border-b-2 flex-1 '
                    
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