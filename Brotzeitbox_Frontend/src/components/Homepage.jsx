import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Navigation from './Navigation';
import './Homepage.css'

export default function Homepage(){

    return(
        <>
            <Header />
            <Navigation/>
                <h1 className='title'>Brotzeitbox</h1>
                <p className='description'>Was nehme ich heute in der Schule?</p>
            <Outlet/>
            <Footer />
        </>
    )
}