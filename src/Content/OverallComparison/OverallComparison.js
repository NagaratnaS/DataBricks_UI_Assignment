import React from "react";
import ComparisonCard from "../ComparisonCard";
import './OverallComparison.css';
import List from "../List/List";


export default function OverallComparison({firstProductValue,secondProductValue}) {

    let combinedProductValues = firstProductValue+secondProductValue;

    return(
        
        <ComparisonCard>
            <h3 className="main_heading">Overall comparison</h3>
            <List
                combinedProductValues = {combinedProductValues}
            />
        </ComparisonCard>
    );
}