import React from "react";
import './SearchBar.css';
import SearchIcon from '../Images/SearchIcon.png';

export default function SearchBar(){
     

    return(

        <div>
            <div className="search_container">
                <img src={SearchIcon} className="search_icon"></img>
                <input type="text" placeholder="What can we help you find?" className="search_field"></input>
                <button className="search_button"> Search </button>
            </div>
        </div>
        
    );
}