import React, { useState, useEffect } from 'react';
import { createdLebensmittelListe } from '../../controller/FetchLebensmittel';
import LebensmittelListeCard from './LebensmittelListeCard';
import {gesamtKalorien} from '../../controller/kalorienController'
import './main.css';

export default function LebensmittelListe({mySelectedItem}){

    const [lebensmittelListe, setLebensmittelListe] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [maxKalorien, setMaxKalorien] = useState(160)

    useEffect(()=>{
        setIsLoading(true)
        fetch('http://localhost:3000/lebensmittel')
        .then((res) => res.json())
        .then((data) => setLebensmittelListe(data))
        setIsLoading(false)
    }, [mySelectedItem]);

    if(isLoading){
        return <div>loading...</div>
    }

    console.log('lebensmittel liste!', lebensmittelListe)

    const deleteHandler = async (lebensmittelId) => {
        
        const newList = lebensmittelListe.filter((item) => item._id !== lebensmittelId)
        setLebensmittelListe(newList)
       
        await fetch(`http://localhost:3000/lebensmittel/${lebensmittelId}`, { method: 'DELETE' });
    }
    
    const myKalorien = []
    const ausgabeListe = lebensmittelListe.map((item) => {
 
     //calucluation der verbrauchten kalorien in state speichern
        
        myKalorien.push(item.kalorien)
        
        const keyID= item._id

        return(       
            <>
                <LebensmittelListeCard key={keyID} title={item.title} kalorien={item.kalorien} lebensmittelId={keyID} onDelete={deleteHandler} />
            </> 
        )
    })

    const kalorienGesamt = gesamtKalorien(myKalorien)   
        
    const kalorienWarnung = kalorienGesamt > maxKalorien ? <div className="ampel" style={{backgroundColor: "red"}}><div className='warnung-nachricht'><p>Sei Vorsichtig!</p></div></div> : <div className="ampel" style={{backgroundColor: "green"}}><div className='warnung-nachricht'><p>Du machst es Prima!</p></div></div>

    return(
        <div className='lebensmittel-list-card'>
            <h3>Meine Liste</h3>
            {ausgabeListe}
            <h3>Gesamtkalorien: {kalorienGesamt} / {maxKalorien}</h3>
            <div className='ampel-container'> {kalorienWarnung} </div>
        </div>
    )
}