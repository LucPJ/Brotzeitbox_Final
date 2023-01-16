import React from 'react';
import { useParams } from 'react-router-dom';
import KontaktFormular from './KontaktFormular';

export default function HeaderItemsDetails({title}){

    const {id} = useParams();

    return(
        <div className='kontakt-formular'>
            <h1>{id}</h1>
            <p>Lass uns bitte eine Nachricht</p><br/>
            <KontaktFormular />
        </div>
    )
}