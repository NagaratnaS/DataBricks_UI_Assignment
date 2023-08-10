import React from "react";
import './SideNavBar.css';


export default function SideNavBar(){


    return(
            <div>
                <header>CX</header>
                <ul>
                <li><a href="#"><i class="fas fa-qrcode"></i>Dashboard</a></li>
                <li><a href="#"><i class="fas fa-link"></i>Shortcuts</a></li>
                <li><a href="#"><i class="fas fa-stream"></i>Overview</a></li>
                <li><a href="#"><i class="fas fa-calendar-week"></i>Events</a></li>
                <li><a href="#"><i class="far fa-question-circle"></i>About</a></li>
                <li><a href="#"><i class="fas fa-sliders-h"></i>Services</a></li>
                <li><a href="#"><i class="far fa-envelope"></i>Contact</a></li>
                </ul>
            </div>
    );
}