import React from 'react';
import './HomePage.css';
import img from '../../assets/Home_Bild.jpg';


export default function HomePage() {
  return (
    <div className='home'>
       <img className='home-img' src={img} alt="bild" />
    </div>
  )
}
