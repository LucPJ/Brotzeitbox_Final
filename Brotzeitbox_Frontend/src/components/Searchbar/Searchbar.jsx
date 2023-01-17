import React, { useState } from "react";
import Searchbutton from "./Searchbutton";
import '../Header/header.css';
import { useNavigate } from "react-router-dom";

export default function Searchbar({setSearchTerm}){
    const [searchInputValue, setSeachInputValue] = useState("")
    const navigate = useNavigate();

    function handleChange(e) {
        setSeachInputValue(e.target.value);
    }
    console.log('serch Value', searchInputValue)

    function handleSubmit(e){
        e.preventDefault();
        setSearchTerm(searchInputValue);
        navigate(`/lebensmittel/${searchInputValue}`);
    }


    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <input className="searchinput" type="text" name="search" placeholder="Suche" onChange={handleChange} value={searchInputValue} />
            <Searchbutton />
        </form>
  )
}