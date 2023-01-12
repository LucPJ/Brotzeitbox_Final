import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { getFilteredLebensmittel } from '../../controller/FetchLebensmittel';
import KategorieFilteredCard from './KategorieFilteredCards';
import './filteredKategorie.css';

export default function KategorieFiltered(){
    
    const {kategorie} = useParams()
    const [filteredList, setFilteredList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    async function filterList(){
        setIsLoading(true)
        const filteredLebensmittel = await getFilteredLebensmittel(kategorie)
        setFilteredList(filteredLebensmittel)
        setIsLoading(false)
    }
    
    useEffect(()=>{
        filterList()
    },[])
    console.log(filteredList)

    if(isLoading){
        return(<h1>isLoading...</h1>)
    }

    const filteredListItems = filteredList.map(item=>{
        
        const keyID= item.sys.id;

        return(
            <KategorieFilteredCard key={keyID} title={item.fields.lebensmittel} imgSrc={item.fields.lebensmittelBild.fields.lebensmittelBild.fields.file.url} alt={item.fields.lebensmittelBild.fields.bildname}/>
        )
    })

    //Fallback setzen, falls es keine ergebnisse zu der kategorie gibt...

    return (
        <div className='filtered-kategorie'>
        {filteredListItems}
        </div>
    )
}