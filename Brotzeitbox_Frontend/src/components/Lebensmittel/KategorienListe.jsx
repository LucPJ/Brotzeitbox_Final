import React, {useState, useEffect} from 'react';
import {client} from '../client';
import KategorieCard from './KategorieCard';
import { getLebensmittel } from '../../controller/FetchLebensmittel';
import './main.css';

export default function Kategorien(){

    const [lebensmittelKategorien, setLebensmittelKategorien] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getAllLebensmittelData(){
        setIsLoading(true)
        const data = await getLebensmittel('kategorie')
        setLebensmittelKategorien(data)
        setIsLoading(false)
    }
    
    useEffect(()=>{
        getAllLebensmittelData()
    },[])

    if (isLoading) {
        return <div>loading...</div>
    }

    const alleKategorien = lebensmittelKategorien.map((item) => {
        
        const keyID= item.sys.id;
        
        return(
            <KategorieCard key={keyID} title={item.fields.kategorien} imgSrc={item.fields.kategorienBild.fields.file.url} imgAlt={item.fields.kategorienBild.fields.title}/>
            )
    })
    
    return(
        <div className='kategorien'>
            {alleKategorien}
        </div>
    )
}