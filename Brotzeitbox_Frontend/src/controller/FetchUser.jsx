export async function createUser(data){
    
    const requestUser = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    await fetch('http://localhost:3000/user', requestUser)
            .then((res) => res.json())
            .then((data)=> console.log(data))
}