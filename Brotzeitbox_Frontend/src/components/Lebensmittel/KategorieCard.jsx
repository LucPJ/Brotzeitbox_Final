import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './main.css';

export default function KategorieCard({title, imgSrc, imgAlt}){
    
    const titleFormated = title.replace(/\s+/g, '-').toLowerCase()
    console.log(titleFormated)
    
    const customLink = `/kategorien/${titleFormated}`
    
   
    return(
        <div className='kategorie-card'>
            <Link to={customLink}>
                <h3>{title}</h3>
                <img src={imgSrc} alt={imgAlt} className='kategorie-card-image'/>
            </Link>
        </div>
    )
}