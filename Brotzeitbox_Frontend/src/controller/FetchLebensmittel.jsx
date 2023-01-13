import {client} from '../components/client';

export async function getLebensmittel (contentType){
    
    const data = await client.getEntries({ content_type: contentType, limit:150 });
    const response = data.items;

    console.log(data)
    return response;
}

export async function getFilteredLebensmittel(kategorie){
 
    const data = await getLebensmittel('lebensmittel');
    const filtered = data.filter(item => kategorie.replace(/-/g," ").toLowerCase() === item.fields.kategorien.fields.kategorien.replace(/-/g," ").toLowerCase());
    
    return filtered;
}

export async function addLebensmittelToList(data){

    const requestLebensmittel = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    const fetchLebensmittel = 
        await fetch('http://localhost:3000/lebensmittel', requestLebensmittel)
                .then((res) => res.json())
                .then((data)=> console.log(data))
        
    return fetchLebensmittel                                           
}

export async function createdLebensmittelListe(){

    const fetchLebensmittelListe = 
        await fetch('http://localhost:3000/lebensmittel')
            .then((res) => res.json())
            .then((data) => console.log(data))
        
    return fetchLebensmittelListe
}

