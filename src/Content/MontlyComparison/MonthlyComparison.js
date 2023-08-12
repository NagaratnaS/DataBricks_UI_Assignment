import React from "react";
import ComparisonCard from "../ComparisonCard";
import './MonthlyComparison.css';
import List from "../List/List";


export default function MonthlyComparison({firstProductValue,secondProductValue}) {
    const today = new Date();

    let getMonth = today.toLocaleString('default', {
        month: 'long',
    });

    let combinedProductValues = firstProductValue+secondProductValue;

    
    return(
        
        <ComparisonCard>
            <h3 className="month_name">{getMonth} comparison</h3>
            <List
                currentMonth = {getMonth}
                combinedProductValues = {combinedProductValues}
                isMonthlyComparison = {true}
            />
        </ComparisonCard>
    );
}