import { RouterProvider } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
//import Lebensmittel from './components/Lebensmittel/Kategorien'
import Lebensmittel from './components/Lebensmittel/Lebensmittel';
import router from './routing/Router'
//import Searchbar from './components/Searchbar/Searchbar';

function App() {


  //initial lebensmittel fetchen...

  return (
    <div className="App">      

      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
