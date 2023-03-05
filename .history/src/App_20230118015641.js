import React, { useEffect } from 'react';


import Header from './Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Open from './Open';
import Topbar from './Topbar';
import Mail from './Mail';
import SendMail from './SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {

    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }))
      }
    })

  }, [])

  return (
    <div className="h-screen relative">
      
      <BrowserRouter>
        {!user ? (
          <Login/>
        ):(
        <div>
          <Header/>
          <Topbar/>
          <Routes>
            <Route exact path="mail" element={<Mail/>} />
            <Route exact path="/" element={<Open/>} />
          </Routes>
          {sendMessageIsOpen &&<SendMail/>}
        </div>
        )}
        
       
      </BrowserRouter>

    </div>
  );
}

export default App;
