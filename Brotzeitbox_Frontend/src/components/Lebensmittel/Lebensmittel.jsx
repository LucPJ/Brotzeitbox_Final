import React, {useState, useEffect} from 'react';
import { getLebensmittel } from '../../controller/FetchLebensmittel';
import Navigation from '../Navigation';
import LebensmittelListe from './LebensmittelListe';
import './main.css';

import LebensmittelCard from './LebensmittelCard';

export default function Lebensmittel(){

    const [lebensmittelItems, setLebensmittelItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getAllLebensmittelData(){
        setIsLoading(true)
        const data = await getLebensmittel('lebensmittel');  
        setLebensmittelItems(data);
        setIsLoading(false)
    }
    
    useEffect(()=>{
        getAllLebensmittelData()
    },[])

    if(isLoading){
        return <div>loading...</div>
    }

   const lebensmittelListe = lebensmittelItems.map((item) => {
        //console.log('item', item)
        
        const keyID= item.sys.id;

        return(
            <>
                <LebensmittelCard key={keyID} title={item.fields.lebensmittel} kalorien={item.fields.kalorien} lebensmittelId={keyID} imgSrc={item.fields.lebensmittelBild.fields.lebensmittelBild.fields.file.url} alt={item.fields.lebensmittelBild.fields.bildname} kategorie={item.fields.kategorien.fields.kategorien}/>
            </>
        )

    }) 

    return(
        
        <div className='lebensmittel'>            
            {lebensmittelListe}
            <LebensmittelListe />
        </div>
    )
}