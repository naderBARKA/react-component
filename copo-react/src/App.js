import React from 'react';
import ProfilePhoto from './Component/profile/ProfilePhoto.js'
import FullName from './Component/profile/FullName.js';
import './App.css';
import Adress from './Component/profile/Adress.js'
function App() {
  return (
    <div>
    <ul className="list-group">
    < li className="list-group" >< ProfilePhoto /></li>
      <li className="list-group">< FullName /></li>
     <li className="list-group"><Adress/></li>
    </ul></div>
  );
  
}

export default App;
