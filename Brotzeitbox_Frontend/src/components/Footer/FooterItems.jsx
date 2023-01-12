import React from 'react';
//import { Link } from 'react-router-dom';

export default function HeaderItems({title}){
    
    //const customLink = `/kategorien/${titleFormated}`
    return(
        <ul className='footer-items'>
            {/* <Link to={customLink}> */}
                <li>{title}</li>
            {/* </Link> */}
        </ul>
    )
}