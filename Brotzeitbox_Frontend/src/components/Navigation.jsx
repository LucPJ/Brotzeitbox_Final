import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'

export default function Navigation(){
    return(
      <div className="nav" >
        <Link to="/">Home</Link>
        <Link to="/lebensmittel">Lebensmittel</Link>
        <Link to="/kategorien">Kategorien</Link>
      </div>  
    )
}