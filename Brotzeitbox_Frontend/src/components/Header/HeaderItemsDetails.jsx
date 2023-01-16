import React from 'react';
import { useParams } from 'react-router-dom';
import './header.css'

export default function HeaderItemsDetails(){

    //console.log(useParams())
    const {id} = useParams();

    return(
        <div className='header-description'>
            <h1>{id}</h1>
            <p>Diese App soll Dir helfen gesunde und nahrhafte Lebensmittel für deine Pausenmahlzeiten auszuwählen. Die Kinder sollen selber für sich herausfinden, welche Lebensmittel sie für ihre gesunde Entwicklung benötigen, und welche sie ausnahmsweise einmal zu sich nehmen sollten. Dies soll spielerisch und intuitiv funktionieren, so dass Kinder Spaß haben, sich mit der App zu beschäftigen.</p>
        </div>
    )
}