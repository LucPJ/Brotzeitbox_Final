import { RouterProvider } from 'react-router-dom';
import './App.css';
//import Lebensmittel from './components/Lebensmittel/Kategorien'
import Lebensmittel from './components/Lebensmittel/Lebensmittel';
import Navigation from './components/Navigation';
import router from './routing/Router'

function App() {

  //initial lebensmittel fetchen...

  return (
    <div className="App">
   
        <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
