import React, { useState } from 'react';
import { createUser } from '../../controller/FetchUser';
import './kontakt-formular.css'

export default function KontaktFormular(){

    const userSchema ={
        name: "",
        email: "",
        nachricht: "",
    }

    const [newUser, setNewUser] = useState();

    function handleChange(event){
        setNewUser(prev=> ({...prev, [event.target.name]: event.target.value}))
    }

    async function onSubmit (e){
        e.preventDefault();
        
        createUser(newUser);
        setNewUser(newUser);
    }

        return(
            <div>
            <form className="kontakt-formular-form">
                <input type="text" id="name" name="name" placeholder="Dein Name" onChange={handleChange}/><br/>
                <input type="text" id="email" name="email" placeholder="Deine Email" onChange={handleChange}/><br/>
                <input type="text" id="nachricht" name="nachricht" placeholder="Deine Nachricht" onChange={handleChange}/><br/>
                <button id="btn" onClick={onSubmit}>Send</button>
            </form>
            </div>
        )
}