import React, {useState, useEffect} from 'react';
import { getLebensmittel } from '../../controller/FetchLebensmittel';
import '../Homepage.css'
import Searchbar from '../Searchbar/Searchbar';
import HeaderItems from './HeaderItems';


export default function Header({setSearchTerm}){

    const [headerItems, setHeaderItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    async function getHeaderItems(){
        setIsLoading(true);
        const item = await getLebensmittel('navHeader');
        setHeaderItems(item)
        setIsLoading(false);
    }

    useEffect(() => {
        getHeaderItems()
    },[])

    if(isLoading){
        return <div>loading...</div>
    }

    //console.log("header items", headerItems)

    const header = headerItems.map((item) => {
        
        const keyID= item.sys.id;

        return( 
            <HeaderItems key={keyID} title={item.fields.headertext} text={item.fields.headerBeschreibung} imgSrc={item.fields.icon?.fields.file.url} />
        )
    })

    return(
        <div className="header">
            {header}
            <Searchbar setSearchTerm={setSearchTerm}/>
        </div>
    )
}