import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';

function Login() {
    const dispatch = useDispatch()
    const signIn = () => {
        signInWithPopup(auth, provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
        })
        .catch((error) => {
            alert(error.messsge)
        })

    }
  return (
    <div className="grid place-items-center h-screen text-center bg-zinc-400 text-white">
        <div className="">
            <p className="text-xl md:text-2xl lg:text-4xl font-serif font-extrabold text bg-zinc-800 p-2 rounded-xl">pemsMail</p>
            <p className="text-lg md:text-xl lg:2xl font-sans mt-2">Log in with Google</p>
            <button onClick={signIn} className="border  w-24 mt-2">Send</button>
        </div>
        
       
        

    </div>
  )
}

export default Login