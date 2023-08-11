import React from "react";
import ComparisonCard from "../ComparisonCard";
import './MonthlyComparison.css';
import List from "../List/List";


export default function MonthlyComparison() {

    return(
        
        <ComparisonCard>
            <h3 className="month_name">August comparison</h3>
            <List/>
        </ComparisonCard>
    );
}