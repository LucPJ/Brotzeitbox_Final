import React from 'react';
import { useParams } from 'react-router-dom';

export default function HeaderItemsDetails(){

    //console.log(useParams())
    const {id} = useParams();

    return(
        <div>
            <h1>{id}</h1>
            <p>Das ist den ID: {id} mit title</p><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in saepe ipsa magni quia adipisci voluptas eligendi corporis officia temporibus a dolorem, quod delectus quisquam nihil eaque beatae sit eius.</p>
        </div>
    )
}