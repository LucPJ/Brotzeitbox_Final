import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import './Homepage.css'
import {useState} from 'react';

export default function Homepage(){
    const [searchTerm, setSearchTerm] = useState("")

    return(
        <>
            <Header setSearchTerm={setSearchTerm}/>
            <Navigation/>
                <h1 className='title'>Brotzeitbox</h1>
                <p className='description'>Was nehme ich heute in der Schule?</p>
            <Outlet />
            <HomePage />
            <Footer />
        </>
    )
}