import React from 'react';

import { Counter } from './features/counter/Counter';
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


function App() {
  return (
    <div className="h-screen">
      
      <BrowserRouter>
      
        <Header/>
        <Topbar/>
        <Routes>
        <Route exact path="mail" element={<Mail/>} />
          <Route exact path="/" element={<Open/>} />
        </Routes>
        <SendMail/>
      </BrowserRouter>

    </div>
  );
}

export default App;
