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


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Topbar/>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Open/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
