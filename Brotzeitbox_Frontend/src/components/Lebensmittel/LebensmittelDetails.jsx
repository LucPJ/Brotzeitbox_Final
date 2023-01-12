import React from "react";
import { useParams } from "react-router-dom";

export default function LebensmittelDetails({kalorien}){

    const {lebensmittel} = useParams()
    
    return(
        <div>
            <h1>{lebensmittel}</h1>
{/*             <p>{lebensmittel} hat {kalorien} kcal</p>
 */}        </div>
    )
}

