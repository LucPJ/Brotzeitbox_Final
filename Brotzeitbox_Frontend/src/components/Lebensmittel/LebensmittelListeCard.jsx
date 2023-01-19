import React, { useState } from 'react';

export default function LebensmittelListeCard({title, kalorien, lebensmittelId, onDelete}){


    const [deletedLebensmittel, setDeletedLebensmittel] = useState("")

    const deleteLebensmittel = () => {
        onDelete(lebensmittelId)
    }

    console.log('delete', deletedLebensmittel.lebensmittelId)

    return(
        <div>
            <ul className='lebensmittel-list'>
                <li>{title} - {kalorien} kcal pro 100g 
                    <button className='btn' onClick={deleteLebensmittel}>X</button>
                </li>
            </ul>
        </div>
    )
}