import React from 'react';


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
import { useSelector } from 'react-redux';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <div className="h-screen relative">
      
      <BrowserRouter>
      
        <Header/>
        <Topbar/>
        <Routes>
        <Route exact path="mail" element={<Mail/>} />
          <Route exact path="/" element={<Open/>} />
        </Routes>
        {sendMessageIsOpen &&<SendMail/>}
      </BrowserRouter>

    </div>
  );
}

export default App;
