import React from "react";
import './ComparisonCard.css';

export default function ComparisonCard(props) {

    return(
        <div>
            <div className="month_container">
                {props.children}
            </div>
        </div>
    );
}