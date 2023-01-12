export function gesamtKalorien(alleKalorien){

    let gesamtKalorien = 0
    alleKalorien.forEach(item=>{
        gesamtKalorien += item
    })
    return gesamtKalorien
}