import React, {useState, useEffect} from 'react';
import { getLebensmittel } from '../../controller/FetchLebensmittel';
import Navigation from '../Navigation';
import LebensmittelListe from './LebensmittelListe';
import './main.css';
import LebensmittelCard from './LebensmittelCard';
import { useParams } from 'react-router-dom';

export default function Lebensmittel(){
    const { search } = useParams();

    const [lebensmittelItems, setLebensmittelItems] = useState([]);
    const [filteredLebensmittel, setFilteredLebensmittel] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [mySelectedItem, setMySelectedItem] = useState([]) //helfer state für rerender
    
    async function getAllLebensmittelData(){
        setIsLoading(true)
        const data = await getLebensmittel('lebensmittel');  
        setLebensmittelItems(data);
        setIsLoading(false)
    }
    
    useEffect(()=>{
        getAllLebensmittelData()
    }, [])

    useEffect(() => {
        search && lebensmittelItems.length && setFilteredLebensmittel(lebensmittelItems.filter(lebensmittel => lebensmittel.fields.lebensmittel.toLowerCase().includes(search.toLowerCase())));
    }, [search, lebensmittelItems])

    if(isLoading){
        return <div>loading...</div>
    }

    const lebensmittelListe = filteredLebensmittel.length ? filteredLebensmittel.map((item) => {
        //console.log('item', item)
        const keyID= item.sys.id;
        return <LebensmittelCard key={keyID} setMySelectedItem={setMySelectedItem} title={item.fields.lebensmittel} kalorien={item.fields.kalorien} lebensmittelId={keyID} imgSrc={item.fields.lebensmittelBild.fields.lebensmittelBild.fields.file.url} alt={item.fields.lebensmittelBild.fields.bildname} kategorie={item.fields.kategorien.fields.kategorien}/>
    }) : lebensmittelItems.map((item) => {
        //console.log('item', item)
        const keyID= item.sys.id;
        return <LebensmittelCard key={keyID} setMySelectedItem={setMySelectedItem} title={item.fields.lebensmittel} kalorien={item.fields.kalorien} lebensmittelId={keyID} imgSrc={item.fields.lebensmittelBild.fields.lebensmittelBild.fields.file.url} alt={item.fields.lebensmittelBild.fields.bildname} kategorie={item.fields.kategorien.fields.kategorien}/>
    })

    return(    
        <div id='lebensmittel-seite'>
            <div className='lebensmittel'>       
                {lebensmittelListe}
            </div>
            <div id='sidebar'>
                <LebensmittelListe mySelectedItem={mySelectedItem}/>
            </div>
        </div>
    )
}