import React from "react";
import './SideNavBar.css';
import HomeIcon from '../Images/HomeIcon.png';
import PythonIcon from '../Images/PythonIcon.png';
import RIcon from '../Images/RIcon.png';
import JavaIcon from '../Images/JavaIcon.png';
import CalenderIcon from '../Images/CalenderIcon.png';
import MessageIcon from '../Images/MessageIcon.png';
import LogoutIcon from '../Images/LogoutIcon.png';



export default function SideNavBar(){


    return(
            <div>
                <div className="nav_style">
                <ul className="list_style">
                    <li className="text_style">CX</li>
                    <div className="list_element">
                        <li><img src={HomeIcon} className="home"></img></li>
                        <li><img src={PythonIcon} className="common_style"></img></li>
                        <li><img src={RIcon} className="common_style"></img></li>
                        <li><img src={JavaIcon} className="common_style"></img></li>
                        <li><img src={CalenderIcon} className="common_style"></img></li>
                        <li><img src={MessageIcon} className="message"></img></li>
                        <li><img src={LogoutIcon} className="exit"></img></li>
                    </div>
                    

                </ul>
                </div>
                
            </div>
    );
}