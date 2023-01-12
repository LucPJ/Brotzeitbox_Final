import React, {useState, useEffect} from 'react';
import { getLebensmittel } from '../../controller/FetchLebensmittel';
import FooterItems from './FooterItems';
import '../Homepage.css'


export default function Footer(){

    const [footerItems, setFooterItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    async function getFooterItems(){
        setIsLoading(true);
        const item = await getLebensmittel('navFooter');
        setFooterItems(item)
        setIsLoading(false);
    }

    useEffect(() => {
        getFooterItems()
    },[])

    if(isLoading){
        return <div>loading...</div>
    }

    //console.log(footerItems)

    const footer = footerItems.map((item) => {
        
        const keyID= item.sys.id;

        return( 
            <FooterItems key={keyID} title={item.fields.title} />
        )
    })

    return(
        <div className="footer">
            {footer}
        </div>
    )
}