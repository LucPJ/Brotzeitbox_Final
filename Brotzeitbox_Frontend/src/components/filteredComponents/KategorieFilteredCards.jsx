import React from 'react'
import { Link } from 'react-router-dom';
import './filteredKategorie.css';

export default function KategorieFilteredCard({title, imgSrc, imgAlt, }){
    
    // const customLink = `/kategorien/${titleFormated}`
   
    return(
        <div className='filtered-kategorie-card'>
            {/* <Link to={customLink}> */}
                <h3>{title}</h3>
                <img src={imgSrc} alt={imgAlt} className='kategorie-card-image'/>
            {/* </Link> */}
        </div>
    )
}