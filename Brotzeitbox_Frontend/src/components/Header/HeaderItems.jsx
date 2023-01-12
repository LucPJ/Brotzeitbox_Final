import React from 'react'
//import { Link } from 'react-router-dom';

export default function HeaderItems({title, imgSrc, imgAlt, }){
    
    //const customLink = `/kategorien/${titleFormated}`
    return(
        <div>
            <img src={imgSrc} alt={imgAlt} />
            {/* <Link to={customLink}> */}
                <h3>{title}</h3>
            {/* </Link> */}
        </div>
    )
}