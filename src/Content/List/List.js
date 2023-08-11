import React from "react";
import './List.css';
import NewIcon from '../../Images/NewIcon.png';


export default function List(){


    return(


        <div>
            <ul className="list_heading">

                    <li className="list_ele"> <img src={NewIcon}/> coffee</li>
                    <div className="list_line"></div>


                    <li className="list_ele"> <img src={NewIcon}/> coffee</li>
                    <div className="list_line"></div>

                
                    <li className="list_ele"> <img src={NewIcon}/> coffee</li>
                
            </ul>
        </div>
    );
}