import React from 'react'; 
import './Header.css';
import MenuIcon from '../Images/MenuIcon.png';

export default function Header() {


    return(
        <div className='header_parent'>
            <div className='header_container'>
                <h3 className='heading'>Marketplace Comparison</h3>
                <button className='download__button'>Download report</button>
                <img src={MenuIcon}></img>
    
            </div>
        </div>
    )



}