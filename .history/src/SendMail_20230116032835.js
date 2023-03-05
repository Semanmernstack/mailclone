import React from 'react'
import { useForm } from "react-hook-form";

function SendMail() {
    const { register, handleSubmit, formState: { errors } } = useForm(); 
  return (
    <div className="sendmail">
            <div className="sendmail__up">
                <h3>New Message</h3>
                <button   >x</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input type="emails"
                    placeholder='to'
                    {...register("to", { required: true })}

                />
                {errors.to && <p className='sendmail__p'>To is Requred</p>}

                <input type="text"
                    placeholder='subject'
                    {...register("subject", { required: true })}

                />
                {errors.subject && <p className='sendmail__p'>Subject is Requred</p>}


                <input type="text"
                    placeholder='message'
                    className='sendmail__m'
                    {...register("message", { required: true })}
                />
                {errors.message && <p className='sendmail__p'>message is Requred</p>}


                <div className="sendmail__button">
                    <button>Send</button>
                </div>
            </form>

        </div>
  )
}

export default SendMail