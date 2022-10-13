import './App.css';
import React from 'react';
import Name from './Component/Profile/FullName';
import Pros from './Component/Profile/ProfilPhoto';
import Lieux from './Component/Profile/Adress';

function App() {
  return (
   <>
   <Pros/> 
   <Name/>
   <Lieux/>
   </>
  );
}

export default App;
