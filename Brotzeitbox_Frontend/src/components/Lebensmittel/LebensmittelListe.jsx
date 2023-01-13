import React, { useState, useEffect } from 'react';
import { createdLebensmittelListe } from '../../controller/FetchLebensmittel';
import LebensmittelListeCard from './LebensmittelListeCard';
import {gesamtKalorien} from '../../controller/kalorienController'


export default function LebensmittelListe({mySelectedItem}){

    const [lebensmittelListe, setLebensmittelListe] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [maxKalorien, setMaxKalorien] = useState(150)

    /*     async function getLebensmittelListe(){
        setIsLoading(true)
        const dataList = await createdLebensmittelListe(data);
        setLebensmittelListe(dataList)
        setIsLoading(false)

        useEffect(() => {
            getLebensmittelListe()
        }, [])
    }
 */    

    useEffect(()=>{
        fetch('http://localhost:3000/lebensmittel')
        .then((res) => res.json())
        .then((data) => setLebensmittelListe(data))
        setIsLoading(false)
    }, [mySelectedItem]);

    if(isLoading){
        return <div>loading...</div>
    }

    console.log('lebensmittel liste!', lebensmittelListe)

    const myKalorien = []
    const ausgabeListe = lebensmittelListe.map((item) => {
 //calucluation der verbrauchten kalorien in state speichern
        
        myKalorien.push(item.kalorien)
        
        const keyID= item._id

        return(       
            <>
                <LebensmittelListeCard key={keyID} title={item.title} kalorien={item.kalorien} />
            </> 
        )
    })

        const kalorienGesamt = gesamtKalorien(myKalorien)   
   


    return(
        <div className='lebensmittel-list-card'>
            <h3>Meine Liste</h3>
            {ausgabeListe}
            <h3>Gesamtkalorien: {kalorienGesamt} / {maxKalorien}</h3>
        </div>
    )
}