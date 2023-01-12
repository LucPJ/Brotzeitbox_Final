import React, { useState, useEffect } from 'react';
import { createdLebensmittelListe } from '../../controller/FetchLebensmittel';
import LebensmittelListeCard from './LebensmittelListeCard';

export default function LebensmittelListe(){

    const [lebensmittelListe, setLebensmittelListe] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
    }, []);

    if(isLoading){
        return <div>loading...</div>
    }

    console.log(lebensmittelListe)

    const ausgabeListe = lebensmittelListe.map((item) => {

        const keyID= item._id

        return(       
            <>
                <LebensmittelListeCard key={keyID} title={item.title} kalorien={item.kalorien} />
            </> 
        )
    })

    function kalorienRechner(kalorien){
        const gesamtKalorien = kalorien;

    }


    return(
        <div className='lebensmittel-list-card'>
            <h3>Meine Liste</h3>
            {ausgabeListe}
            <button onClick={kalorienRechner}>Kalorien rechnen</button>
            <p>Gesamtkalorien: </p>
        </div>
    )
}