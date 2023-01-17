import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import Searchbar from './Searchbar/Searchbar';
import './Homepage.css'

export default function Homepage(){

    function searchLebensmittel(){
        const [searchTerm, setSearchTerm] = useState("")
    
        return
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      }

    return(
        <>
            <Header />
            <Navigation/>
                <h1 className='title'>Brotzeitbox</h1>
                <p className='description'>Was nehme ich heute in der Schule?</p>
            <Outlet/>
            <HomePage/>
            <Footer />
        </>
    )
}