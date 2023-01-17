import React, { useState } from "react";
import Searchbutton from "./Searchbutton";
import '../Header/header.css';

export default function Searchbar({setSeachTerm}){

    const [searchInputValue, setSeachInputValue] = useState("")

    function handleChange(e) {
        setSeachInputValue(e.target.value);
    }
    console.log('serch Value', searchInputValue)

    function handleSubmit(e){
        e.preventDefault();
        setSeachTerm(setSeachInputValue);
    }


    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <input className="searchinput" type="text" name="search" placeholder="Suche" onChange={handleChange} />
            <Searchbutton />
        </form>
  )
}