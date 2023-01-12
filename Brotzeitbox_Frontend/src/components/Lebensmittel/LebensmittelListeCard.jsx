import React from 'react';

export default function LebensmittelListeCard({title, kalorien}){


    return(
        <div>
            <ul className='lebensmittel-list'>
                <li>{title} enthält {kalorien} kcal pro 100g</li>
            </ul>
        </div>
    )
}